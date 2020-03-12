import {combineReducers} from 'redux';
import reducers_info from './reducers_info';
import potterReducer from './potterReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  reducerInfo : reducers_info,
  potterReducer: potterReducer,
  projectReducer: projectReducer
})

export default rootReducer;
