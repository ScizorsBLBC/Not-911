import React from "react";
import { Link } from "react-router-dom";

const Violence = () => {
    return (
        <div className="Category background-profile text-profile">
            <button className="back-button">
                <Link to="/">
                    ← Back
                </Link>
            </button>
            <div>
                <p>
                    24 Hour Access
                </p>
                <h2> 
                    Safe Horizons 24 hour Domestic Violence Hotline
                </h2>
                <p>
                    1-800-621-4673
                </p>
                <button className="button">
                        <a href="tel:18006214673">
                            Call
                        </a>
                    </button>
            </div>

        </div>
    )
}

export default Violence;