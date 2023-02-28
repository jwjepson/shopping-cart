import React from "react";
import "../styles/Home.css";
import DonutSplash from "../images/donut-splash.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div className="home">
                <div className="left-info">
                    <div className="home-title">Welcome to Chef's Bakery</div>
                    <div className="home-description">Indulge in our delectable donuts freshly made every day!
                        Our bakery shop offers a wide variety of flavors that will surely satisfy
                        your sweet cravings.
                    </div>
                    <Link to="/shop">
                        <button className="menu-button" type="button">Menu</button>
                    </Link>
                </div>
                <img className="donut-splash" src={DonutSplash} alt="Donuts"></img>
            </div>
        </div>
    )
}

export default Home;