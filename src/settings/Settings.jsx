import React from "react";

import DarkModeIcon from "/assets/dark-mode-icon.svg";
import LightModeIcon from "/assets/light-mode-icon.svg";

/**
 * Renders <Settings/> page with a toggle button for dark and light mode. We saved the state selected by the dark mode toggle to LocalStorage for persisting between page reloads.
 * @param props 
 * @param props.isDarkMode - A variable that is being passed in from the parent component<App>. It is a part of the parent components state.
 * @param props.setIsDarkMode - A function that sets the state of isDarkMode.
 * @returns {Function}
 */
const Settings = (props) => {
    const darkModeHelper = (bool) => {
        props.setIsDarkMode(bool);
        localStorage.setItem('isDarkMode', bool);
    }
    return (
        <div>
            Toggle {props.isDarkMode === true ?  `Light` : `Dark`} Mode 
            <button className="dark-mode-button" onClick={() => {
                if (props.isDarkMode === true) {
                    darkModeHelper(false);
                } else {
                    darkModeHelper(true);
                }
                }}>
                {props.isDarkMode === true ? <LightModeIcon/> : <DarkModeIcon/> }
            </button>
        </div>
    )
}

export default Settings;