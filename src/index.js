import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import reducer from './reducers/savingsReducer';
import Header from './layout/Header';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';


let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <Header>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Header>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

