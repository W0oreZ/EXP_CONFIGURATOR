import {
  SENSOR_READ,
  SET_CONFIG,
  SET_INFO,
  SET_PORTS,
  CONNECT_PORT,
  DISCONNECT_PORT,
  MONITOR_LOG,
  MONITOR_WARN,
  MONITOR_ERROR,
  MONITOR_UNHANDLED,
  MONITOR_RAW,
  MONITOR_EVENT,
  FLASH_START,
  FLASH_END,
  FLASH_SUCCESS,
  FLASH_ERROR,
} from "./actionTypes";

const initialState = {
  active_connection : false,
  port : {path:null},
  device: null,
  ports: [],
  rawlogs: [],
  logs: [],
  info: {},
  config : {loaded:false},
  sensors:{},
  flasher:{
    running: false,
    error : "",
    success : "",
  }
};

export default function(state = initialState, action) {
  switch (action.type) 
  {
    case SET_CONFIG:
      return { ...state, config: { ...action.payload, loaded:true } };
    case SET_INFO:
      return { ...state, info : { ...state.info, ...action.payload } };
    case SET_PORTS:
      return { ...state, ports: action.payload };
    case CONNECT_PORT:
      return {...state, active_connection : true, port : action.payload.port, device : action.payload.device};
    case DISCONNECT_PORT:
      return initialState;
    case MONITOR_LOG:
      return { ...state, logs:[{type:"log",time:Date.now(),message:action.payload}, ...state.logs] };
    case MONITOR_EVENT:
      return { ...state, logs:[{type:"event",time:Date.now(),message:action.payload}, ...state.logs] };
    case MONITOR_WARN:
      return { ...state, logs:[{type:"warn",time:Date.now(),message:action.payload}, ...state.logs] };
    case MONITOR_ERROR:
      return { ...state, logs:[{type:"error",time:Date.now(),message:action.payload}, ...state.logs] };
    case MONITOR_UNHANDLED:
      return { ...state, logs:[{type:"unhandled",time:Date.now(),message:action.payload}, ...state.logs] };
    case MONITOR_RAW:
      return { ...state, rawlogs:[{time:Date.now(),message:action.payload}, ...state.rawlogs]};
    case SENSOR_READ:
      const newState = {
        ...state, 
        sensors:{
          ...state.sensors,
          [action.payload.label]:{
            value:action.payload.value,
            type:action.payload.type
          }
        }
      }
      if(Object.prototype.hasOwnProperty.call(state.sensors, action.payload.label))
      {
        if(Object.prototype.hasOwnProperty.call(state.sensors[action.payload.label], 'data'))
        {
          if(action.payload.label === "rfid")
          {
            if(state.sensors[action.payload.label].data[state.sensors[action.payload.label].data.length] !== action.payload.value)
            {
              newState.sensors[action.payload.label].data = [...state.sensors[action.payload.label].data, action.payload.value];
            }
          }
          else
          {
            newState.sensors[action.payload.label].data = [...state.sensors[action.payload.label].data, action.payload.value];
          }
        }
        else
        {
          newState.sensors[action.payload.label].data = [action.payload.value];
        }
      }
      return newState
    case FLASH_START:
      return {...state, flasher: {running : true, error : "", success : ""}}
    case FLASH_END:
      return {...state, flasher: {...state.flasher, running : false}}
    case FLASH_SUCCESS:
      return {...state, flasher : {...state.flasher, success:action.payload}}
    case FLASH_ERROR:
      return {...state, flasher : {...state.flasher, error:action.payload}}
    default:
      return state;
  }
}

