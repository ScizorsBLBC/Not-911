import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Violence from "./violence/Violence";
import MentalHealth from "./mental-health/MentalHealth";
import Homelessness from "./homelessness/Homelessness";
import LegalSupport from "./legal-support/LegalSupport";
import DrugsOrPoisoning from "./drugs-or-poisoning/DrugsOrPoisoning";


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