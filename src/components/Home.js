import React from "react";
import "../styles/Home.css";
import DonutSplash from "../images/donut-splash.png";

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
                    <button className="menu-button" type="button">Menu</button>
                </div>
                <img className="donut-splash" src={DonutSplash} alt="Picture of donuts"></img>
            </div>
        </div>
    )
}

export default Home;