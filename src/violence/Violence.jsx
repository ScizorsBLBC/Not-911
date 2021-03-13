import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "../components/OrganizationTile";
import organizationArray, { VIOLENCE } from "../components/OrganizationList"; 

/**
 * <Violence/>
 * The category page component that renders the tiles on the Violence page using the organization list array of data filtering out organizations that have Violence in the category. The result of that is used with the .map method that takes data objects and returns React components. Returns a div with each Organization Tile
 * @returns {Function}
 */
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