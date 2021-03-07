import React from "react";

import DarkModeIcon from "/assets/dark-mode-icon.svg";
import LightModeIcon from "/assets/light-mode-icon.svg";

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