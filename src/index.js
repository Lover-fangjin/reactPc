import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import store from './provider/store';
import {Provider} from 'react-redux';
import registerServiceWorker from './provider/registerServiceWorker'

import './main.css';

ReactDom.render(
	<Provider store={store}>
    	<App/>
	</Provider>,
    document.getElementById('root')
);
registerServiceWorker();