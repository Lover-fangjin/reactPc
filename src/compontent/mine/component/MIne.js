/**
 * @Auther fangjin
 * @ClassTitle:MIne
 * @Created time on : 2018/11/715:56
 * @Description:描述...
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchData} from '../action/MineAction'


import '../styles/mine.css';

export class Mine extends Component{
    //
    // defaultProps={
    //     imgVisiable:false,
    //     activeText:'展示图片'
    // };

    constructor(props){
        super(props);
        this.state={
            imgVisiable:false,
            activeText:'展示图片'
        }

    }

    requestShow(){
        this.props.mineFetch()
    };

    showPicture(){
        this.setState({
            imgVisiable:!this.state.imgVisiable,
            activeText:!this.state.imgVisiable?'展示图片':'隐藏图片',
        })
    };

    toggleImg(){
        return(
            this.state.imgVisiable?
            <h1>我是国人得骄傲</h1> : null
        )
    }

    render(){

        let {minepool} = this.props;
        console.log("--------------- render(minepool);---------------");
        console.log(minepool);

        return(
            <div>
                <p className='mine'>我是mine里面的小东西</p>
                <Link className={"menu-title"} to={{pathname: '/home'}}>
                    <button>点我回去</button>
                </Link>
                <button onClick={()=>{this.requestShow()}}>请求数据</button>
                <button onClick={()=>{this.showPicture()}}>{this.state.activeText}</button>
                {this.toggleImg()}
            </div>
        )
    }
}
//mapStateToProps  将state 映射到当前组件属性props  | 将store中的数据 作为props 绑定到组件上
//                 在当前组件state发生改变，即reducer处理完之后 该方法会被回调
const mapStateToProps =(store) =>{

    const {minepool} = store;
    return {
        minepool
    }

};
//mapDispatchToProps 将dispatch 发送action指令的方法 映射到组件属性props ，
//                   在方法绑定到props之后 ，用户在当前组件中即可以使用this.props.方法名 进行数据操作 （操作见32行 ）

                    // 将action 作为props 绑定到组建上
const mapDispatchToProps = dispatch => ({
    mineFetch:() =>{
        // mine数据请求
        dispatch(fetchData())
    }
});




export default connect(mapStateToProps,mapDispatchToProps)(Mine); //容器组件
//connect 是一个高阶函数 用来装饰react组件

