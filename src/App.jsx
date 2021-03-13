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

/**
 * <App/> 
 * Entry point for application where the <Route> is defined. 
 * When a user toggles Dark or Light mode on Settings.jsx this is where the where the css classname toggle happens & the state is saved.
 * Default value is retrieved via localStorage.getItem.
 */
const AppComponent = () => {
   // SETUP
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true');
    
    // RENDER
    return (
        <BrowserRouter>    
        <div className={isDarkMode === true ? "app-wrapper dark-mode" : "app-wrapper"} >
            <header>
                <h1>
                    NOT 911 San Francisco Bay Area
                </h1>
            </header>
            
            {/* ROUTING */}
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
            
            {/* FIXED NAVBAR */}
            <NavBar/>
        </div>
    </BrowserRouter>
    )
}

const App = (
    <AppComponent/>
)

render(App, document.querySelector("#root"));