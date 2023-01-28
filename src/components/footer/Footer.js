import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container footerBox display-flex">
                <div className="footerPart1">
                    <div className="logo">
                        <Link to="/">
                            <img src="images/logo1.png" alt="logo" />
                        </Link>
                    </div>
                    <p className="footerAbout textSmall textMedium">
                        We are always open to discuss your project and improve your online presence.
                    </p>
                    <div className="footerContactBox display-flex">
                        <div className="footerContacts textSmall">
                            <p>Email us</p>
                            <span className="textSmall textMedium">contact@website.com</span>
                        </div>
                        <div className="footerContacts textSmall">
                            <p>Call us</p>
                            <span className="textSmall textMedium">0927 6277 28525</span>
                        </div>
                    </div>
                </div>
                <div className="footerPart2">
                    <h1 className="textBig">Lets Talk!</h1>
                    <p className="footerInvitation textSmall">We are always open to discuss your project, improve your online
                        presence
                        and help
                        with your
                        UX/UI design challenges.</p>
                    <div className="footerIcons display-flex">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <p className="contactFieldFooter privacyLink">
                        <Link className="transition" to="/privacy">
                            Our Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>

            <nav className="footerNav">
                <div className="container">
                    <div className="navBox display-flex">
                        <div className="footerTxt">
                            <span>Copyright &#169 2022, Finsweet.com</span>
                        </div>
                        <div className="navItem footerNavItem">
                            <ul className="textMedium display-flex">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/works">Our Works</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Footer