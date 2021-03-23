import React from "react";
import { Link } from "react-router-dom";

import AboutIcon from "/assets/about-icon.svg";
import HomeIcon from "/assets/home-icon.svg";
import SettingsIcon from "/assets/settings-icon.svg";

/**
 * Renders a persistant <NavBar/> at the bottom of the screen.
 * @returns {Function}
 */
const NavBar =() => {
    return (
        <footer className="NavBar">
            <Link to="/" title="home">
                <HomeIcon/>
                Home
            </Link>
            <Link to="/about" title="about">
                <AboutIcon/>
                About
            </Link>
            <Link to="/settings" title="settings">
                <SettingsIcon/>
                Settings
            </Link>
        </footer>
    )
}

export default NavBar