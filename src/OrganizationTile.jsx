import React from "react"

import CallIcon from "./assets/call-icon.svg";

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