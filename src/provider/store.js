/**
 * @Auther fangjin
 * @ClassTitle:store
 * @Created time on : 2018/11/1314:05
 * @Description:描述...
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducter';

const middleware = [thunk];
const store = createStore(rootReducer,applyMiddleware(...middleware));

export  default store;
