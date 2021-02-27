import React from "react";
import { Link } from "react-router-dom";

const LegalSupport = () => {
    return (
        <div className="Category background-profile text-profile">
            <button className="back-button">
                <Link to="/">
                    ← Back
                </Link>
            </button>

        </div>
    )
}

export default LegalSupport;