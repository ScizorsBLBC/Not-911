import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "../components/OrganizationTile";
import {HOMELESSNESS} from "../components/OrganizationList"; 
import fetchOrganizations from "../components/FetchOrganizations";

/**
 * <Homelessness/> 
 * Look to Violence.jsx for documentation as they share functionality.
 * @returns {Function}
 */

const Homelessness = () => {
    const [organizationArray, setOrganizationArray] = useState([]);
    //fetch array and set to state
    
    useEffect(() => {
        fetchOrganizations()
            .then((fetchedOrganizationArray) => {
                setOrganizationArray(fetchedOrganizationArray);
            });
    }, []);

    console.log(organizationArray);

    // Render
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
                        return orgObj.category.includes(HOMELESSNESS)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default Homelessness;