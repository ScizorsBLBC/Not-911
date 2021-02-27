import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <div className="HomeText">
                <p className="call911__headline">
                    Life-Threatening emergency?
                </p>
                {/* Make confirmation button state change */}
                <button className="call911__button">
                    <a href="tel:4158120875">
                        Call 911
                    </a>
                </button>
                <h1>
                    What do you need help with?
                </h1>
                <button>
                    <Link to="/violence">
                        Violence
                    </Link>
                </button>
                <button>
                    Mental Health
                </button>
                <button>
                    Homelessness
                </button>
                <button>
                    Legal Support
                </button>
                <button>
                    Drugs or Poisoning
                </button>
            </div>
        </div>
    )
}
export default Home;