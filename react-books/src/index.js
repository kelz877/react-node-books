import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import '../src/css/index.css';
import '../src/css/App.css';
=======
import './index.css';
import App from './components/App';
>>>>>>> master
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {DisplayBooks} from '../src/components/DisplayBooks';


ReactDOM.render(
    <BrowserRouter>
    <BaseLayout>
        <Switch>
            <App/>
        </Switch>
    </BaseLayout>

    </BrowserRouter>









    , document.getElementById('root'));

    

serviceWorker.unregister();
