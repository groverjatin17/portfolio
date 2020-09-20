import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducerInfo from './reducers_info';
import potterReducer from './potterReducer';
import unsplashReducer from './unsplashReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducerInfo'],
};

const rootReducer = combineReducers({
    reducerInfo,
    potterReducer,
    unsplashReducer,
});

export default persistReducer(persistConfig, rootReducer);
