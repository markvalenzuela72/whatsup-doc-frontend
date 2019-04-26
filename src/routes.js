import React, { Component } from "react";
import { Home } from "./views/Home";
import { Dashboard } from './views/Dashboard';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Switch, Redirect } from 'react-router-dom';


import "./App.scss";

class Routes extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Routes;