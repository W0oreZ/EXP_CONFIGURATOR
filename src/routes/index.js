
import withHeader from './../layout/Header';
import HomePage from './../views/HomePage/';
import Dashboard from './../views/Dashboard/';
import DeviceLogin from './../views/DeviceLogin/';
import SerialMonitor from './../views/Serial/SerialMonitor';
import SettingWindow from '../views/SettingWindow/SettingWindow';
import Flasher from './../views/Flasher/Flasher';


const routes = [
  //main routes
  { path: '/flasher', component: Flasher , headerComponent: withHeader('', [{ title: 'Flasher', path: '/flasher' }])},
  { path: '/settings', component: SettingWindow , headerComponent: withHeader('', [{ title: 'Settings', path: '/settings' }]) },
  { path: '/serial-monitor', component: SerialMonitor , headerComponent: withHeader('', [{ title: 'Serial Monitor', path: '/serial-monitor' }]) },
  { path: '/dashboard', component: Dashboard, headerComponent: withHeader('Dashboard', [{ title: 'Welcome to EXP CONFIGURATOR', path: '/' }]) },

  //unprotected routes
  { path: '/device-connection', component: DeviceLogin, ispublic : true },
  { path: '/', component: HomePage, ispublic: true },
];

export default routes;

export const links = [
  { url: "/flasher", label: "Flasher", icon: "ion ion-md-speedometer", class_name: "has-submenu" },
  { url: "/dashboard", label: "Dashboard", icon: "ion ion-md-speedometer", class_name: "has-submenu" },
  { url: "/serial-monitor", label: "Serial Monitor", icon: "ion-md-laptop", class_name: "has-submenu" },
  { url: "/settings", label: "Settings", icon: "ion ion-md-flower", class_name: "float-right" },
];


/*
{
      url: "/io", label: "Sensors", icon: "ion ion-md-grid", class_name: "has-submenu",
      children: [
          {
              url: "/io/dashboard", label: "Monitor",
          },
          {
              url: "/info", label: "Infos",
              children: [
                  { url: "/io/info/ai1", label: "Analogique Input 1" },
                  { url: "/io/info/ai2", label: "Analogique Input 2" },
                  { url: "/io/info/di1", label: "Digital Input 1" },
                  { url: "/io/info/di2", label: "Digital Input 2" },
              ]
          },
          {
              url: "/io/dout", label: "Digital Control",
              children: [
                  { url: "/io/dout/1", label: "Digital OutPut 1" },
                  { url: "/io/dout/2", label: "Digital OutPut 2" },
              ]
          },
          { url: "/io/rfid", label: "RFID Control" },
          { url: "/io/history", label: "Historique" },
          { url: "/io/settings", label: "Settings" },
      ]
  },
  { url: "/memory", label: "Memory", icon: "ion ion-ios-apps", class_name: "has-submenu" },
*/