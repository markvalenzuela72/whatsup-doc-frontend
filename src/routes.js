import React from "react";
import { Home } from "./views/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Switch, Redirect } from 'react-router-dom';

import "./App.scss";

const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
export default Routes;