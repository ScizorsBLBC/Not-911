import React, { useState } from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import { VIOLENCE, MENTAL_HEALTH, LEGAL_SUPPORT, HOMELESSNESS, DRUGS_OR_POISONING } from "./components/OrganizationCategories";
import NavBar from "./components/NavBar";
import About from "./about/About";
import Settings from "./settings/Settings";
import CategoryPage from "./components/CategoryPage";

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
                <CategoryPage category={VIOLENCE}/>
            </Route>
            <Route exact path="/mental-health">
                <CategoryPage category={MENTAL_HEALTH}/>
            </Route>
            <Route exact path="/homelessness">
                <CategoryPage category={HOMELESSNESS}/>
            </Route>
            <Route exact path="/legal-support">
                <CategoryPage category={LEGAL_SUPPORT}/>
            </Route>
            <Route exact path="/drugs-or-poisoning">
                <CategoryPage category={DRUGS_OR_POISONING}/>
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