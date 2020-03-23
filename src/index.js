import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { HashRouter, Switch } from "react-router-dom"
import './index.css';
import App from './App';

import templatePage from "./posts/template";

const routing = (
    <HashRouter>
        <Switch>
            <Route exact path = "/" component = { App } />
            <Route path = "/template" component = { templatePage } />
        </Switch>
    </HashRouter>
)


ReactDOM.render(routing, document.getElementById('root'))
