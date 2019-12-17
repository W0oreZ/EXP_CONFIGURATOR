import { combineReducers  } from 'redux';

// Layout Front
import Layout from './layout/reducer';
import DeviceManager from './device/reducer';


const rootReducer = combineReducers({
  Layout,
  DeviceManager
});

export default rootReducer;