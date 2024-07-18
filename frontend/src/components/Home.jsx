import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import HomeImage from "../assets/banner.png";

const Home = () => {
    return (
        <div>
            <div className="homeBannerContainer" id="homeSection">
                <div className="homeBannerImgContainer">
                    <img src={BannerBackground} alt="banner background" />
                </div>
                <div className="homeTextSection">
                    <h2 className="primaryHeading">
                        Enjoy Always Fresh & Tasty Meals. It's not just food...
                    </h2>
                    <h1 className="highlightHeading">
                        It's Delicious <span>Food</span>
                    </h1>
                    <p className="primaryText">
                        A Symphony of Flavors. Your Journey to Culinary Bliss
                        Starts Now.
                    </p>
                    <div className="homeButtonContainer">
                        <a className="ourMenuButton" href="#menuSection">
                            Our Menu
                        </a>
                        <a className="bookTableButton" href="#bookingSection">
                            Book Table
                        </a>
                    </div>
                </div>
                <div className="homeImageSection">
                    <img src={HomeImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
