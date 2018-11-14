/**
 * @Auther fangjin
 * @ClassTitle:MineAction
 * @Created time on : 2018/11/1316:32
 * @Description:描述...
 */
import HttpRequest from '../../../httpRequest/HttpRequest';
export const MINE_REQUEST_LODDING ='MINE_REQUEST_LODDING';  //状态一；数据加载中
export const MINE_REQUEST_SUCCESS ='MINE_REQUEST_SUCCESS';  //状态一；成功状态
export const MINE_REQUEST_ERROR ='MINE_REQUEST_ERROR';  //状态一；失败状态

// mainData 为成功状态下得数据结构 或进行二次封装得数据结构
// 它为同步的action  属于构造函数 重新封装后台请求过来的数据结构
let loadMineSuccessAction = (data = [])=>{
    return {
        type:MINE_REQUEST_SUCCESS,
        mainData:data
    }
};

let loadMineLoddingAction = ()=>{
    return {
        type:MINE_REQUEST_LODDING,
        mainData:"数据加载中..."
    }
};

let loadMineErrorAction = ()=>{
    return {
        type:MINE_REQUEST_ERROR,
        mainData:"数据加载失败"
    }
};

// 异步数据请求 demo={"name":"小明","age":99}
export const fetchData =()=>{
    let _url = "/starTeachers/queryAllPage";
    let _params = [{"type":0},{"startPage":0},{'endPage':10}];
    let bodyParams = {"url":_url, "params":_params};

    return dispatch =>{
            dispatch(loadMineLoddingAction());
        return HttpRequest.HttpPost(bodyParams).then(res =>{
            if (res && res.code === 10000){
                console.log("---------------  const fetchData ---------------");
                console.log(res.data);
                dispatch(loadMineSuccessAction(res.data))  //dispatch发送指令（通过 loadMineSuccessAction封装之后的action） 到reducer 。
            } else {
                console.log('服务器开小差了！！！！！！！！！！！！！！');
                dispatch(loadMineErrorAction())
            }

        })
    }

};