import React from "react";
import aboutBackground from "../assets/about-background.png";
import aboutImage from "../assets/salad3.png";

const About = () => {
    return (
        <div className="aboutSectionContainer" id="aboutSection">
            <div className="aboutBackgroundImageContainer">
                <img src={aboutBackground} alt="about background" />
            </div>
            <div className="aboutSectionImgContainer autoRotate">
                <img src={aboutImage} alt="" />
            </div>
            <div className="aboutSectionTextContainer autoShow">
                <h1 className="highlightHeading">
                    <span>About</span> Us
                </h1>
                <h2 className="primaryHeading">
                    Food Is An Important Part Of A Balanced Diet
                </h2>
                <p className="primaryText">
                    At FOOD Krunch, we believe that food plays a crucial role in
                    a healthy lifestyle.
                </p>
                <p className="primaryText">
                    That's why we're committed to offering you delicious meals
                    crafted with quality ingredients, ensuring your dining
                    experience is not only enjoyable but also nourishing.
                </p>
            </div>
        </div>
    );
};

export default About;
