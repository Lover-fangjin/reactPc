/**
 * @Auther fangjin
 * @ClassTitle:store
 * @Created time on : 2018/11/1314:05
 * @Description: createStore 作用：① 应该是把reducer 和 action 关联起来，当用户进行dispatch的action操作时，会在对应的reducer进行接受处理。
 *                                ② 通过redux 封装 使得store 能够代理rootReducer 执行操作它的数据结构
 *                           以上来自袁俊华的猜测！！！
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducter';

const middleware = [thunk];
const store = createStore(rootReducer,applyMiddleware(...middleware));

export  default store;
