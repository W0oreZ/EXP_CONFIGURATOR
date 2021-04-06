import {
  SET_PORTS,
  CONNECT_PORT,
  DISCONNECT_PORT,
  MONITOR_LOG,
  MONITOR_WARN,
  MONITOR_ERROR,
  MONITOR_EVENT,
  MONITOR_RAW,
  MONITOR_UNHANDLED,
  SET_INFO,
  SET_CONFIG,
  SENSOR_READ,
  FLASH_START,
  FLASH_SUCCESS,
  FLASH_ERROR,
  FLASH_END,
} from "./actionTypes";

const SerialPort = window.require('serialport');
const Readline = window.require('@serialport/parser-readline');
const execShPromise = window.require("exec-sh").promise;
const isDev = window.require('electron-is-dev');
const curloc = window.require('electron').remote.app.getAppPath();
const dPath = `${isDev ? curloc+'/src' : window.process.resourcesPath}/extraResources/`;
let device = null;

// run interactive bash shell
const run = async (port) => {
  let out;
  try {
    out = await execShPromise(dPath+'flasher -c port='+port.path+' -w '+dPath+'prog.hex 0x08000000 --start 0x08000000', true);
  } catch (e) {
    console.log('Error: ', e);
    console.log('Stderr: ', e.stderr);
    console.log('Stdout: ', "Press reset Key");
 
    return {status:"error",msg:"Press Reset Button and try again"};
  }
 
  return {status:"success",msg:"Device Flashed"};
}

export const scanPorts = () => async(dispatch) => {
  try {
    let ports = await SerialPort.list();
    dispatch({
      type: SET_PORTS,
      payload: ports
    });
  } catch (error) {
    console.log("Error : ",error);
    dispatch({
      type: MONITOR_ERROR,
      payload: "PORT SCAN FAILED"
    });
  }
};

export const connectDevice = (port) => async(dispatch) => {
  try {
    if(device !== null)
    {
      await device.close();
      dispatch({
        type: MONITOR_EVENT,
        payload: "DEVICE DISCONNECTED"
      });
    }

    device = new SerialPort(port.path, {
      baudRate: 115200,
      autoOpen:false,
    });

    

    device.open(async function (err) {
        if (err) {
          console.log('Error opening port: ', err.message);
          dispatch({
            type: MONITOR_ERROR,
            payload: "ERROR OPENING CONNECTION TO DEVICE"
          });
          return null;
        }
        const parser = device.pipe(new Readline({ delimiter: '\r\n' }))
        parser.on('data', (data)=>{
          handleMONITORMessage(data, dispatch);
        })
        console.log("port open!");
        dispatch({
          type: MONITOR_EVENT,
          payload: "DEVICE CONNECTED"
        });
        await dispatch({
          type: CONNECT_PORT,
          payload: {port : port, device : device}
        });
    });

    device.on('error', function(err) {
        console.log('Error: ', err.message);
        dispatch({
          type: MONITOR_ERROR,
          payload: "DEVICE ERROR : "+err.message
        });
    })

    device.on('open', function() {
        console.log("open event called");
        dispatch({
          type: MONITOR_EVENT,
          payload: "CONNECTING TO DEVICE ..."
        });
    });

    device.on('data', function (data) {
        //console.log(data.toString("utf8"));
        
    });

    device.on('close', async function (err) {
      //console.log('port closed', err);  
      //await dispatch({
      //  type: DISCONNECT_PORT,
      //  payload: {}
      //});
    });
  } catch (error) {
    console.log("Error : ",error);
    dispatch({
      type: MONITOR_ERROR,
      payload: "PORT ERROR : "+error.message
    });
  }
};

export const sendMessage = (msg) => async( dispatch ) => {
  try {
    if(device)
    {
      device.write(msg);
    }
  } catch (error) {
    console.log("can't send message : ", error);
  }
}

export const loadConfig = () => async ( dispatch ) => {
  try 
  {
    if(device)
    {
      device.write("load_cfg");
      setTimeout(()=>device.write("infos"),1000);
    }
  } 
  catch (error) 
  {
    console.log("can't load config");
  }
}

export const flashConfig = (config) => async ( dispatch ) => {
  try 
  {
    let parsedConfig = `${config.apn},${config.gprsUser},${config.gprsPass},${config.broker},${config.port},${config.interval}`;
    device.write("conf#"+parsedConfig);
  } 
  catch (error) 
  {
    console.log(error.message)
  }
}

export const flashFirmware = (port) => async ( dispatch ) => {
  dispatch({
    type: FLASH_START
  });

  if(device !== null)
  {
    await device.close();
    dispatch({
      type: MONITOR_EVENT,
      payload: "DEVICE DISCONNECTED"
    });
  }

  const result = await run(port);
  if(result.status === "error")
  {
    dispatch({
      type: FLASH_ERROR,
      payload: result.msg
    });
    console.log('error : ',result.msg)
  }
  else
  {
    dispatch({
      type: FLASH_SUCCESS,
      payload: result.msg
    });
    console.log(result.msg);
  }

  dispatch({
    type: FLASH_END
  });
}


async function handleMONITORMessage(message, dispatch) {
  try {
    let data = message.toString("utf8");
    dispatch({
      type: MONITOR_RAW,
      payload: data
    })
    data = JSON.parse(data);

    if(data.type === "SENSOR")
    {
      dispatch({
        type: SENSOR_READ,
        payload: data.payload
      })
    }
    else if(data.type === "LOG")
    {
      dispatch({
        type: MONITOR_LOG,
        payload: data.payload
      })
    }
    else if(data.type === "WARN")
    {
      dispatch({
        type: MONITOR_WARN,
        payload: data.payload
      })
    }
    else if(data.type === "INFO")
    {
      dispatch({
        type: SET_INFO,
        payload: data.payload
      })
    }
    else if(data.type === "CONFIG")
    {
      dispatch({
        type: SET_CONFIG,
        payload: data.payload
      })
    }
    else
    {
      dispatch({
        type: MONITOR_UNHANDLED,
        payload: data.payload
      })
    }
  } catch (error) {
    console.log(error.message);
    
  }
  
}