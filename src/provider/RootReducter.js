/**
 * @Auther fangjin
 * @ClassTitle:RootReducter
 * @Created time on : 2018/11/1314:10
 * @Description:描述...
 */
import minepool from '../compontent/mine/reducer/MineReducer';

import {combineReducers} from 'redux';

const roorReducter = combineReducers({
    minepool,
});

export default roorReducter;