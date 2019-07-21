import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import { createStore } from "redux";
import { Provider } from 'react-redux';
// import firebase from './firebase';
import reducer from './reducers/user_reducer';


const store = createStore(reducer);

class Root extends React.Component {

    // componentDidMount(){
    //     firebase
    //     .auth()
    //     .onAuthStateChanged((user) => {
    //         if(user){
    //             this.props.history.push('/')
    //         }
    //     })
    // }

    render (){
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}

const RootWithAuth = withRouter(Root)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RootWithAuth />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

