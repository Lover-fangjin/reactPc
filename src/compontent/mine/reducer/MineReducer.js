/**
 * @Auther fangjin
 * @ClassTitle:MineReducer
 * @Created time on : 2018/11/1316:32
 * @Description:minepool 函数在作用上是一个deducer reducer 得作用 是接收外部action指令 ，对state进行封装处理并返回新得state 。
 *                       Object.assign 为es6得方法 他得作用是用来返回一个新得state
 */
import * as mineAction from '../action/MineAction'

const initialState={
    mainData:[]  //根据项目需求 以及数据库数据结构 自定义得state数据结构
};

export default function minepool(state = initialState, action){
    console.log("--------------- function minepool ---------------");
    console.log(action.mainData);

    switch (action.type){

        case mineAction.MINE_REQUEST_LODDING:
            return Object.assign({},state,{
                mainData:action.mainData ? action.mainData :{},
            });
        case mineAction.MINE_REQUEST_SUCCESS:
            return Object.assign({},state,{
                mainData:action.mainData ? action.mainData :[],
            });

        case mineAction.MINE_REQUEST_ERROR:
            return Object.assign({},state,{
                mainData:action.mainData ? action.mainData :{},
            });

        //    默认返回值 default 必须写
        default:
            return state;
    }
}