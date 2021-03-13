import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "../components/OrganizationTile";
import organizationArray, {LEGAL_SUPPORT} from "../components/OrganizationList"; 

/**
 * <LegalSupport/> 
 * Look to Violence.jsx for documentation as they share functionality.
 * @returns {Function}
 */
const LegalSupport = () => {
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
                        return orgObj.category.includes(LEGAL_SUPPORT)
                    })
                    .map((orgObj) => {
                        return (
                            <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                        )
                    })}
        </div>
    )
}

export default LegalSupport;