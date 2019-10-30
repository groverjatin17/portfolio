import {combineReducers} from 'redux';
import reducers_info from './reducers_info.js'

const rootReducer = combineReducers({
  reducerInfo : reducers_info
})

export default rootReducer
