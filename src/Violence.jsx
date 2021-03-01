import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";

const dataArray = [
    {
        category: "violence",
        header: "24 Hour Access",
        name: "Safe Horizons 24 Hour Domestic Violence Hotline",
        phoneNumber: "1-800-621-4673",
        callNumber: "18006214673"
    },
    {
        category: "violence",
        header:"24 Hour Access",
        name: "Safe Horizons Rape & Sexual Assault Victims Hotline",
        phoneNumber: "1-855-234-1042",
        callNumber: "18552341042"
    },
    {
        category: "violence",
        header: "Mon-Fri 10am-1pm, 2pm-6pm",
        name: "Peer Advocate Community United Against Violence (LGBTQ+)",
        phoneNumber: "415-333-HELP (4357)",
        callNumber: "4153334357"
    },
    {
        category: "violence",
        header: "24 Hour Access",
        name: "Violence Intervention Program",
        phoneNumber: "1-800-664-5880",
        callNumber: "18006645880"
    },
    {
        category: "violence",
        header: "24 Hour Access",
        name: "National Domestic Violence Hotline",
        phoneNumber: "1-800-799-7233",
        callNumber: "18007997233"
    }
]

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
                {dataArray.map((orgObj) => {
                return (
                    <OrganizationTile key={orgObj.callNumber} organization={orgObj}/>
                )
            })}
        </div>
    )
}

export default Violence;