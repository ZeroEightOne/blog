import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import templatePage from "./posts/template";

export default class route extends Component {
    render() {
        return (
            <Router>
            <Switch>
                
                <Route exact path="/" component={App} />
                <Route exact path="/template" component={ templatePage } />
                
            </Switch>
            </Router>
        );
    }
}