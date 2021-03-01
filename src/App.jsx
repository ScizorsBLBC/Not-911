import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Violence from "./Violence";
import MentalHealth from "./MentalHealth";
import Homelessness from "./Homelessness";
import LegalSupport from "./LegalSupport";
import DrugsOrPoisoning from "./DrugsOrPoisoning";


const App = (
    <BrowserRouter>    
        <div className="app-wrapper">
            {/* <header>
                add persistant header
            </header> */}
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/violence">
                <Violence/>
            </Route>
            <Route exact path="/mental-health">
                <MentalHealth/>
            </Route>
            <Route exact path="/homelessness">
                <Homelessness/>
            </Route>
            <Route exact path="/legal-support">
                <LegalSupport/>
            </Route>
            <Route exact path="/drugs-or-poisoning">
                <DrugsOrPoisoning/>
            </Route>
        </div>
    </BrowserRouter>
)

render(App, document.querySelector("#root"));