import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home background-profile">
            <div className="HomeText text-profile">
                <section className="call911__section">
                    <p className="call911__headline">
                        Life-Threatening emergency?
                    </p>
                    {/* Make confirmation button state change */}
                    <button className="button" className="call911__button">
                        <a href="tel:4158120875">
                            Call 911
                        </a>
                    </button>
                </section>
                <h3>
                    What do you need help with?
                </h3>
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