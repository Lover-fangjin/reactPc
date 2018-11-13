/**
 * @Auther fangjin
 * @ClassTitle:MineReducer
 * @Created time on : 2018/11/1316:32
 * @Description:描述...
 */
import * as mineAction from '../action/MineAction'

const initialState={
    mainData:[]
};

export default function minepool(state = initialState, action){
    console.log("--------------- function minepool ---------------");
    console.log(action.mainData);

    switch (action.type){
        case mineAction.MINE_REQUEST_SUCCESS:
            return Object.assign({},state,{
                mainData:action.mainData ? action.mainData :[],
            });

        //    默认返回值 default 必须写
        default:
            return state;
    }
}