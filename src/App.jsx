import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Violence from "./Violence";

import GlobalStyled from "./GlobalStyled";

const App = (
    <BrowserRouter>    
        <div>
            <h1>
                {/* Not 911 Make an icon? */}
            </h1>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/violence">
                <Violence/>
            </Route>
        </div>
    </BrowserRouter>
)

render(App, document.querySelector("#root"));