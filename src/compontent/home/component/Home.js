/**
 * @Auther fangjin
 * @ClassTitle:Home.js
 * @Created time on : 2018/11/714:49
 * @Description:描述...
 */
import React ,{Component} from 'react';
import '../styles/home.css';
import {Link} from 'react-router-dom';
import HttpRequest from '../../../httpRequest/HttpRequest'


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            color:[
                'deepskyblue','lime','red','yellow','deeppink'
            ],
            currentColor:'#000'
        }

    }

    componentDidMount(){
        let _url = "/starTeachers/queryAllPage";
        let _params = [{"type":0},{"startPage":0},{'endPage':10}];
        let bodyParams = {"url":_url, "params":_params};

        HttpRequest.HttpPost(bodyParams).then(res =>{
            if (res && res.code === 10000){
                console.log(res.data);
            } else {
                console.log('服务器开小差了！！！！！！！！！！！！！！')
            }
        })
    }


    activeColor (){
        let length=this.state.color.length;
        this.randomNum6 = Math.round(Math.random() * length); // 可基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。
        console.log(this.randomNum6);
        let curColor =this.state.color[this.randomNum6];
        this.setState({
            currentColor:curColor
        })
    }

    // aColor = ()=>{
    //     let length=this.state.color.length;
    //     this.randomNum6 = Math.round(Math.random() * length); // 可基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。
    //     console.log(this.randomNum6);
    //     let curColor =this.state.color[this.randomNum6];
    //     this.setState({
    //         currentColor:curColor
    //     })
    // };


    render(){

        return(
            <div>
                <p className="names" style={{color:this.state.currentColor}}>我是home里面的小东西</p>
                <Link className={"menu-title"} to={{pathname: '/mine'}}>
                    <button >点我跳转</button>
                </Link>
                <button onClick={()=>{this.activeColor()}} className='randomColor'>点我随机变色</button>
                {/*<button onClick={()=>{this.aColor}} className='randomColor'>点我随机变色</button>*/}
            </div>
        )
    }

}
