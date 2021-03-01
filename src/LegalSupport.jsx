import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";

const dataArray = [
    {
        category: "legal-support",
        header: "24 Hour Access",
        name: "National Lawyer Guild Arrest Support Helpline",
        phoneNumber: "415-909-4NLG (4654)",
        callNumber: "4159094654"
    },
    {
        category: "legal-support",
        header: "24 Hour Access",
        name: "Safe Horizon Crime Victim Hotline",
        phoneNumber: "1-866-689-4357",
        callNumber: "18666894357"
    }
]
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
                {dataArray.map((orgObj) => {
                return (
                    <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                )
            })}
        </div>
    )
}

export default LegalSupport;