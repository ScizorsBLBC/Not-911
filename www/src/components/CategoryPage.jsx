import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "../components/OrganizationTile";
import fetchOrganizations from "../components/FetchOrganizations";

/**
 * <CategoryPage/> 
 * A reusable component that renders the category pages  that the <OrganizationTile/> renders each tile on.  Uses the fetched array of data from Airtable fitlered by category. The result of that is used with the .map method that takes data objects and returns React components. Returns a div with each Organization Tile.
 * @param props
 * @param props.category -  the category of the organization which is used to filter out organizations.
 * @returns {Component} 
 */

const CategoryPage = (props) => {
    const [organizationArray, setOrganizationArray] = useState([]);
    // Fetch array and set to state
    useEffect(() => {
        fetchOrganizations()
            .then((fetchedOrganizationArray) => {
                setOrganizationArray(fetchedOrganizationArray);
            });
    }, []);

    console.log(organizationArray);
    
    // Render (Organization Tile componenet used here)
    // Map and filter array via props

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
                        return orgObj.category.includes(props.category)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default CategoryPage;