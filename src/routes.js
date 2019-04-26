import React, { Component } from "react";
import { Home } from "./views/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Switch, Redirect } from 'react-router-dom';
import { About } from "./views/About";
import { Contact } from "./views/Contactus";

import "./App.scss";

class Routes extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contactus" component={Contact} />
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Routes;