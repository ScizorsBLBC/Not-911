import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";

const dataArray = [
    {
        category: "drugs-or-poisoning",
        header: "24 Hour Access",
        name: "San Francisco Poison Control Center",
        phoneNumber: "1-800-222-1222",
        callNumber: "18002221222"
    },
    {
        category: "drugs-or-poisoning",
        header: "24 Hour Access",
        name: "Substance Abuse & Mental Health Services Administration National Helpline (SAMHSA)",
        phoneNumber: "1-800-662-4357",
        callNumber: "18006624357"
    }
]
const DrugsOrPoisoning = () => {
    return (
        <div className="Category background-profile text-profile">
            <div className="back-button-div">
                <button className="back-button">
                    <Link to="/">
                        ← Back
                    </Link>
                </button>
            </div>
                {dataArray.map((orgObj) => {
                return (
                    <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                )
            })}
        </div>
    )
}

export default DrugsOrPoisoning;