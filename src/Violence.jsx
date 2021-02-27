import React from "react";
import { Link } from "react-router-dom";

const Violence = () => {
    return (
        <div className="Category background-profile text-profile">
            <div>
                <button className="back-button">
                    <Link to="/">
                        ← Back
                    </Link>
                </button>
            </div>
            <div>
                <p className="header-profile">
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
            <div>
                <p className="header-profile">
                    24 Hour Access
                </p>
                <h2> 
                    Safe Horizons Rape & Sexual Assault Victims Hotline
                </h2>
                <p>
                    1-855-234-1042
                </p>
                <button className="button">
                        <a href="tel:18552341042">
                            Call
                        </a>
                    </button>
            </div>
            <div>
                <p className="header-profile">
                    Mon-Fri, 10am-1pm, 2pm-6pm
                </p>
                <h2> 
                    Peer Advocate Community United Against Violence (LGBTQ+)
                </h2>
                <p>
                    415-333-HELP (4357)
                </p>
                <button className="button">
                        <a href="tel:4153334357">
                            Call
                        </a>
                    </button>
            </div>
            <div>
                <p className="header-profile">
                    24 Hour Access
                </p>
                <h2> 
                    Violence Intervention Program
                </h2>
                <p>
                    1-800-664-5880
                </p>
                <button className="button">
                        <a href="tel:18006645880">
                            Call
                        </a>
                    </button>
            </div>
            <div>
                <p className="header-profile">
                    24 Hour Access
                </p>
                <h2> 
                    National Domestic Violence Hotline
                </h2>
                <p>
                    1-800-799-7233
                </p>
                <button className="button">
                        <a href="tel:18007997233">
                            Call
                        </a>
                    </button>
            </div>
            
        </div>
    )
}

export default Violence;