import { combineReducers } from 'redux';
import reducerInfo from './reducers_info';
import potterReducer from './potterReducer';
import unsplashReducer from './unsplashReducer';

const rootReducer = combineReducers({
    reducerInfo,
    potterReducer,
    unsplashReducer,
});

export default rootReducer;
