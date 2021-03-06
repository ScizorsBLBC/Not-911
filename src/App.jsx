import React, { useState } from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Violence from "./violence/Violence";
import MentalHealth from "./mental-health/MentalHealth";
import Homelessness from "./homelessness/Homelessness";
import LegalSupport from "./legal-support/LegalSupport";
import DrugsOrPoisoning from "./drugs-or-poisoning/DrugsOrPoisoning";
import NavBar from "./components/NavBar";
import About from "./about/About";
import Settings from "./settings/Settings";



const AppComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <BrowserRouter>    
        <div className={isDarkMode === true ? "app-wrapper dark-mode" : "app-wrapper"} >
            <header>
                NOT 911
            </header>
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
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/settings">
                <Settings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            </Route>
            <NavBar/>
        </div>
    </BrowserRouter>
    )
}
const App = (
        <AppComponent/>
)

render(App, document.querySelector("#root"));