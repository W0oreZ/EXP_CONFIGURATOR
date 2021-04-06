
const exec = window.require('child_process').exec;
const isDev = window.require('electron-is-dev');
const curloc = window.require('electron').remote.app.getAppPath();
const pathAppResources = `${isDev ? curloc+'/src' : window.process.resourcesPath}/extraResources/`;

execute(pathAppResources+'flasher -h', (output) => {
  console.log("result : ",output);
});

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => { 
      //console.log(stderr);
      //console.log(error);
      if(stderr) throw stderr;
      if(error) throw error
      callback(stdout); 
  });
};

export function testConnection(port) {
  execute(pathAppResources+'flasher -c port='+port.path, (output) => {
    console.log(output);
  });
}