/**
 * @Auther fangjin
 * @ClassTitle:MIne
 * @Created time on : 2018/11/715:56
 * @Description:描述...
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/mine.css';

export default class Mine extends Component{

    render(){
        return(
            <div>
                <p className='mine'>我是mine里面的小东西</p>
                <Link className={"menu-title"} to={{pathname: '/home'}}>
                    <button>点我回去</button>
                </Link>
            </div>
        )
    }
}


