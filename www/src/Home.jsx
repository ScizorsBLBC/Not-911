import React from "react";
import { Link } from "react-router-dom";

import CallIcon from "./assets/call-icon.svg";

/**
 * <Home/>
 * Renders home page with a call 911 button and links to each category page. 
 * @returns {Function}
 */
const Home = () => {
    return (
        <div className="Home background-profile">
            <div className="HomeText text-profile">
                <section className="call911__section">
                    <p className="call911__headline">
                        Life-Threatening emergency?
                    </p>
                    {/* TODO: Make confirmation button state change*/}
                    <button  className="button call911__button">
                        <a href="tel:911">
                            <CallIcon/> Call 911
                        </a>
                    </button>
                </section>
                <b>
                    What do you need help with?
                </b>
                <div>
                    <button className="button">
                        <Link to="/violence">
                            Violence
                        </Link>
                    </button>
                </div>
                <div>
                    <button className="button">
                        <Link to="/mental-health">
                            Mental Health
                        </Link> 
                    </button>
                </div>
                <div>
                    <button className="button">
                        <Link to="/homelessness">
                            Homelessness
                        </Link>
                    </button>
                </div>
                <div>
                    <button className="button">
                        <Link to="legal-support">
                            Legal Support
                        </Link>
                    </button>
                </div>
                <div>   
                    <button className="button">
                        <Link to="drugs-or-poisoning">
                            Drugs or Poisoning
                        </Link>
                    </button>
                </div> 
            </div>
        </div>
    )
}
export default Home;