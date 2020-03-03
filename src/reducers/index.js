import {combineReducers} from 'redux';
import reducers_info from './reducers_info.js'
import potterReducer from './potterReducer.js'

const rootReducer = combineReducers({
  reducerInfo : reducers_info,
  potterReducer: potterReducer
})

export default rootReducer;
