import React from "react"

import CallIcon from "../assets/call-icon.svg";

/**
 * Renders <OrganizationTile/> component for each organization in the data array which shows the organizations hours of operation, name, phone number, and renders a call <button/> component.
 * References OrganizationCategories.js for the values of the objects in the array of data fetched from Airtable.
 
 * @param props
 * @param props.organization - the organization object.
 * @param props.organization.header - the hours of operation of the organization.
 * @param props.organization.name - the name of the oraganization.
 * @param props.organization.phoneNumber - the phone number of the organization formatted for human readability with acronymns if applicable.
 * @param props.organization.callNumber - the phone number of the organization formatted for the html anchor link for the call button.
 * @returns {Component} 
 */
const OrganizationTile = (props) => {
    return (
        <div className="organization-tile">
            <p className="header-profile">
                {props.organization.header}
            </p>
            <p> 
                {props.organization.name}
            </p>
            <p>
                {props.organization.phoneNumber}
            </p>
            <button className="button call-button">
                <a href={`tel:${props.organization.callNumber}`}>
                <CallIcon/> Call
                </a>
            </button>
        </div>
    )
};

export default OrganizationTile;