/**
 * @Auther fangjin
 * @ClassTitle:RootReducter
 * @Created time on : 2018/11/1314:10
 * @Description:   combineReducers 是将当前项目应用中的所有reducer进行整合 的方法，整合之后 ，rootReducer在state数据结构上和store是一致的
 */
import minepool from '../compontent/mine/reducer/MineReducer';

import {combineReducers} from 'redux';

const roorReducter = combineReducers({
    minepool,
});

export default roorReducter;