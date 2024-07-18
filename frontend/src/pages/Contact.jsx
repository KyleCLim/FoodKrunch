import React from "react";
import Logo from "../assets/foodkrunch_logo.png";

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactLogo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="contactTextContainer">
                <p className="contactText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Viverra justo nec ultrices dui sapien eget mi proin
                    sed. Donec et odio pellentesque diam volutpat commodo sed.
                    Amet luctus venenatis lectus magna fringilla urna porttitor
                    rhoncus. Congue eu consequat ac felis donec et odio.
                    Tristique magna sit amet purus gravida quis blandit turpis.
                    Sagittis purus sit amet volutpat consequat mauris nunc.
                    Ornare aenean euismod elementum nisi. Et netus et malesuada
                    fames ac turpis. Nibh nisl condimentum id venenatis a.
                    Ultricies mi eget mauris pharetra et. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Pellentesque sit amet
                    porttitor eget dolor morbi non. Cras ornare arcu dui vivamus
                    arcu. Enim diam vulputate ut pharetra sit amet aliquam id.
                    Aenean et tortor at risus viverra adipiscing. Nibh mauris
                    cursus mattis molestie a iaculis at erat pellentesque. Amet
                    consectetur adipiscing elit ut aliquam purus sit amet
                    luctus. Quam viverra orci sagittis eu volutpat odio
                    facilisis mauris. Mauris sit amet massa vitae tortor
                    condimentum.
                </p>
                <p className="contactText">
                    Mattis enim ut tellus elementum sagittis vitae et leo.
                    Lobortis scelerisque fermentum dui faucibus in ornare quam
                    viverra orci. Consequat semper viverra nam libero justo
                    laoreet sit amet cursus. Porttitor lacus luctus accumsan
                    tortor posuere ac. Consectetur purus ut faucibus pulvinar
                    elementum integer enim neque. Eget lorem dolor sed viverra
                    ipsum. Ut placerat orci nulla pellentesque dignissim enim
                    sit. Purus sit amet luctus venenatis lectus magna fringilla.
                    Eget aliquet nibh praesent tristique magna sit amet. Nisi
                    scelerisque eu ultrices vitae auctor eu. Non blandit massa
                    enim nec dui nunc mattis enim. Est sit amet facilisis magna
                    etiam tempor orci. Egestas pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris. Est pellentesque elit
                    ullamcorper dignissim cras. Sed id semper risus in hendrerit
                    gravida rutrum.
                </p>
            </div>
            <div className="contactUs">
                <h1 className="highlightHeading">
                    Contact <span>Us</span>
                </h1>
                <h3>Email: foodkrunch@gmail.com</h3>
            </div>
        </div>
    );
};

export default Contact;
