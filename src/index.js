import React from "react";
import ReactDOM from "react-dom";
// import Demo from "./Material-ui-demoes/Demo";
// import App from './App'
import Calculator from "./Calculator/Container/Calculator";
// import Appbar from './Material-ui-demoes/appbar'
import "./index.css";
// import Hooks from './hooks-01-starting-project/src/App'
// import Mern from './Material-ui-demoes/MERN'
import Chatbox from "./Material-ui-demoes/chatbox";
import Mammen from "./B2E/mammen";
import Login, {OtpScreen} from "./B2E/b2eLogin";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
const app = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/otp" component={OtpScreen} />
            <Route path="/dashboard" component={Mammen}/>
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(app, document.querySelector("#root"));
