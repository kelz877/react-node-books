import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
