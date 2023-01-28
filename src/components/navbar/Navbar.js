import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="navBox display-flex">
                    <div className="logo">
                        <Link to="/">
                            <img src="images/logo1.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="navItem">
                        <ul className="textMedium display-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/works">Our Works</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <Link to="/contact">
                                <button className="transition">Contact us</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar