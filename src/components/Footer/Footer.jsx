import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaAccessibleIcon } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">

                    <div className="title">About
                        jhhurf fj34hufhjudcn 3efhiu3hf 
                        f3j4iofjiu3ehdjiw 
                        djf3jfu uhur4h3ubu3huru4ywhdkjnduhyehdejnd uhfu3ehdje
                        jhd3ehfidbd eufy4u3hdhdjdw uedfyu3hdihijd 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Allahabad Rd, uttar pradesh, prayagraj
                            265562565
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone:4587 2345 48 68
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text"> Smart Watch</span>
                    <span className="text"> Bluetooth</span>
                    <span className="text"> Earphones</span>
                    <span className="text"> Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text"> Privacy Policy</span>
                    <span className="text"> Returns</span>
                    <span className="text"> Terms and Conditions</span>
                    <span className="text"> Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    SHOPKART 2023 CREATED BY SATYA PRAKASH PREMIUM E-COMERS SOLUTIONS.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
