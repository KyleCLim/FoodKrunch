import React from "react";
import FeaturedA from "../assets/meal9.png";
import FeaturedB from "../assets/meal11.png";
import FeaturedC from "../assets/meal8.png";
import FeaturedD from "../assets/salad3.png";

const Featured = () => {
    const featuredFoods = [
        {
            fID: 1,
            name: "Cheesy Chicken Pari-pari",
            price: "₱550",
            img: FeaturedA,
            desc: "Lorem ipsum dolor sit amet",
        },
        {
            fID: 2,
            name: "Krunch Roasted Chicken",
            price: "₱630",
            img: FeaturedB,
            desc: "Dolor morbi non arcu risus quis",
        },
        {
            fID: 3,
            name: "Chicken Karagi Special",
            price: "₱375",
            img: FeaturedC,
            desc: "Congue eu consequat ac felis",
        },
        {
            fID: 4,
            name: "Salmon Zesty Greens",
            price: "₱295",
            img: FeaturedD,
            desc: "Erat pellentesque adipiscing commodo",
        },
    ];

    return (
        <div className="featuredSectionContainer">
            <div className="featuredSectionTextContainer autoShow">
                <h1 className="highlightHeading">
                    Our <span>Featured</span>
                </h1>
                <p className="primaryText">
                    Try our best selling, mouthwatering, divinely delicious
                    dishes! Each bite is an explosion of flavor, crafted with
                    the freshest ingredients and a passion for perfection.
                </p>
            </div>
            <div className="featuredFoodContainer autoShow">
                {featuredFoods.map((food) => {
                    return (
                        <div className="featuredFoodCard" key={food.fID}>
                            <img
                                className="featuredDishImg"
                                src={food.img}
                                alt={food.name}
                            />
                            <div className="featuredFoodDetailBox">
                                <h3 className="featuredDishName">
                                    {food.name}
                                </h3>
                                <p className="featuredDishDesc">{food.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Featured;
