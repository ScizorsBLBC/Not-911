import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";
import organizationArray, { DRUGS_OR_POISONING } from "./OrganizationList"; 

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
                {organizationArray
                    .filter((orgObj) => {
                        return orgObj.category.includes(DRUGS_OR_POISONING)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default DrugsOrPoisoning;