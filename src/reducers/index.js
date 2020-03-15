import {combineReducers} from 'redux';
import reducers_info from './reducers_info';
import potterReducer from './potterReducer';
import unsplashReducer from './unsplashReducer';

const rootReducer = combineReducers({
  reducerInfo : reducers_info,
  potterReducer: potterReducer,
  unsplashReducer: unsplashReducer
})

export default rootReducer;
