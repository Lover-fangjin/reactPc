/**
 * @Auther fangjin
 * @ClassTitle:MineReducer
 * @Created time on : 2018/11/1316:32
 * @Description:minepool 函数在作用上是一个deducer reducer 得作用 是接收外部action指令 ，对state进行封装处理并返回新得state 。
 *                       Object.assign 为es6得方法 他得作用是用来返回一个新得state
 *
 *                       reducer就是处理action函数返回的线索的［数据再处理函数］，action是［预处理函数］。
 *

 *                       Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的
 *                       记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
 */
import * as mineAction from '../action/MineAction'

const initialState={
    mainData:[]  //根据项目需求 以及数据库数据结构 自定义得state数据结构
};

export default function minepool(state = initialState, action){   //minepool 也就是（ ruducer）是一个纯函数,用来接收旧的state 和action ，最后返回新的state
                                //state = initialState  该方法为es6参数默认值 Redux首次执行时，state为undefined ，此时返回初始state

                                /*
                                    //  此函数 相当于 下面这个
                                    function todoApp(state, action) {
                                        if (typeof state === 'undefined') {
                                            return initialState
                                        }

                                        // 这里暂不处理任何 action，
                                        // 仅返回传入的 state。
                                        return state
                                */

    switch (action.type){

        case mineAction.MINE_REQUEST_LODDING:
            return Object.assign({},state,{ // Object.assign() 新建一个副本,该方法有两个参数，如果第一个参数不设为空对象，它会改变第一个参数得值
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

        //    默认返回值 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
        default:
            return state;
    }
}