import React from "react";
import { Link } from "react-router-dom";

import OrganizationTile from "./OrganizationTile";

const dataArray = [
    {
        category: "mental-health",
        header: "24 Hour Access",
        name: "California State Emotional Support Helpline",
        phoneNumber: "1-855-845-7415",
        callNumber: "18558457415"
    },
    {
        category: "mental-health",
        header: "24 Hour Access",
        name: "Disaster Distress National Helpline (SAMHSA)",
        phoneNumber: "1-800-985-5990",
        callNumber: "18009855990"
    },
    {
        category: "mental-health",
        header: "Mon-Fri 9am-8pm",
        name: "Integrated Counseling Center Sliding Scale / Low Fee Counseling",
        phoneNumber: "415-648-2644",
        callNumber: "4156482644"
    }
]
const MentalHealth = () => {
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

export default MentalHealth;