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
const mapStateToProps =(store) =>{
    console.log("--------------- mapStateToProps(minepool);---------------");
    console.log(store);
    const {minepool} = store;
    return {
        minepool
    }

};

const mapDispatchToProps = dispatch => ({
    mineFetch:() =>{
        // mine数据请求
        dispatch(fetchData())
    }
});




export default connect(mapStateToProps,mapDispatchToProps)(Mine);

