/**
 * @Auther fangjin
 * @ClassTitle:app.js
 * @Created time on : 2018/11/714:27
 * @Description:描述...
 */

import React ,{Component} from 'react';
import Home from './compontent/home/component/Home.js';
import Mine from './compontent/mine/component/Mine.js'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

export default class app extends Component {


    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/mine'} component={Mine}/>
                        <Route path={'/home'} component={Home}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
