import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";
import organizationArray, { MENTAL_HEALTH } from "./OrganizationList"; 

const MentalHealth = () => {
    return (
        <div className="Category background-profile text-profile">
            <div className="back-button-div">
                <button className="back-button">
                    <Link to="/">
                        ← Back
                    </Link>
                </button>
            </div>
                {organizationArray
                    .filter((orgObj) => {
                        return orgObj.category.includes(MENTAL_HEALTH)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default MentalHealth;