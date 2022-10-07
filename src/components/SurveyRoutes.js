import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./Home.js";
import SampleSurvey from "./SampleSurvey.js";
import Inventory from './Inventory.js';
import InventoryReport from './InventoryReport';


const SurveyRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to='/'>Home</NavLink>
                {" "}|{" "}
                <NavLink to='/sample'>Sample</NavLink>
                {" "}|{" "}
                <NavLink to='/inventory'>Inventory</NavLink>
                {" "}|{" "}
                <NavLink to='/report'>Report</NavLink>
            </div>
            <Switch>
                <Route path="/sample">
                    <SampleSurvey />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route path="/report">
                    <InventoryReport />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <h2>404 NOT FOUND</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default SurveyRoutes;