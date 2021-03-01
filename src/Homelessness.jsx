import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";

const dataArray = [
    {
        category: "homelessness",
        header: "24 Hour Access",
        name: "San Francsico Rental Assistance Program",
        phoneNumber: "415-557-6484",
        callNumber: "4155576484"
    },
    {
        category: "homelessness",
        header: "Daily meals 8-9am, 12-1:30pm, Dinner served M-F 4-5:30pm",
        name: "GLIDE",
        phoneNumber: "415-674-6000",
        callNumber: "4156746000"
    },
    {
        category: "homelessness",
        header: "24 Hour Access",
        name: "Project Homeless Connect",
        phoneNumber: "1-855-588-7968",
        callNumber: "18555887968"
    },
    {
        category: "homelessness",
        header: "Mon-Fri 8:30am-4:30pm",
        name: "St. Anthony Foundation",
        phoneNumber: "415-241-2600",
        callNumber: "4152412600"
    },
    {
        category: "homelessness",
        header: "Tue 9am-Noon, Wed 1pm-4pm, Thurs-Fri 9am-Noon & 1pm-4pm",
        name: "Homeless Advocacy Project",
        phoneNumber: "1-800-405-4HAP (4427)",
        callNumber: "18004054427"
    }
]
const Homelessness = () => {
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

export default Homelessness;