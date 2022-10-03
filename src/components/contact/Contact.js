import React from 'react'
import './contact.css'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container contactBox display-flex">
                <div className="contactImgBox">
                    <div className="overlay">
                        <div className="contactImgTxtBox">
                            <h1 className="textBig">Building stellar websites for early startups</h1>
                            <p className="textSmall textMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                                incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>

                </div>
                <div className="contactField">
                    <h1 className="contactFieldHeading">Send inquiry</h1>
                    <p className="contactFieldTxt textSmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor incididunt ut labore.</p>
                    <form className="contactFieldForm display-flex" action="#" method="POST">
                        <input className="contactInp" type="text" placeholder="Your Name" />
                        <input className="contactInp" type="email" placeholder="Email" />
                        <input className="contactInp" type="url" placeholder="Paste your Figma design URL" />
                        <input className="contactSubmit btnLight transition" type="submit" value="Send an Inquiry" />
                    </form>
                    <p className="contactFieldFooter text-center">
                        <Link className="transition" to="/contact">
                            Get in touch with us<i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact