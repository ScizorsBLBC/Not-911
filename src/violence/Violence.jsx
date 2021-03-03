import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "../components/OrganizationTile";
import organizationArray, { VIOLENCE } from "../components/OrganizationList"; 

const Violence = () => {
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
                        return orgObj.category.includes(VIOLENCE)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default Violence;