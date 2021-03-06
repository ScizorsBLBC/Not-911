import React from "react";


const Settings = (props) => {
    return (
        <div>
            Toggle Dark Mode 
            <button className="button" onClick={() => {
                if (props.isDarkMode === true) {
                    props.setIsDarkMode(false);
                } else {
                    props.setIsDarkMode(true);
                }
                }}>
                {props.isDarkMode === true ? "Dark Mode On" : "Dark Mode Off"}
            </button>
        </div>
    )
}

export default Settings;