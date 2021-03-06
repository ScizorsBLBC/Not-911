import React from "react";

import DarkModeIcon from "/assets/dark-mode-icon.svg";
import LightModeIcon from "/assets/light-mode-icon.svg";

const Settings = (props) => {
    return (
        <div>
            Toggle Dark / Light Mode 
            <button className="dark-mode-button" onClick={() => {
                if (props.isDarkMode === true) {
                    props.setIsDarkMode(false);
                } else {
                    props.setIsDarkMode(true);
                }
                }}>
                {props.isDarkMode === true ? <LightModeIcon/> : <DarkModeIcon/> }
            </button>
        </div>
    )
}

export default Settings;