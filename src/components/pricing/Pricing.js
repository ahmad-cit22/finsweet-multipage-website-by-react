import React from 'react'
import './pricing.css'

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="container pricingBox commonPadding">
                <div className="pricingBoxTxts text-center">
                    <h1 className="textBig">Our Pricing Plans</h1>
                    <p className="textSmall textMedium">
                        When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs
                        to
                        life — without coding them.
                    </p>
                </div>
                <div className="pricingBoxContent display-flex">
                    <div className="pricingTables transition display-flex">
                        <div className="price display-flex">
                            <h1 className="textBig">
                                $299
                            </h1>
                            <p className="textSmall">Per Design</p>
                        </div>
                        <p className="productName textMedium">Landing Page </p>
                        <p className="productDetails textSmall">When you’re ready to go beyond prototyping in Figma.</p>
                        <ul className="productAttributes display-flex">
                            <li><i className="fa-solid fa-play"></i>All limited links</li>
                            <li><i className="fa-solid fa-play"></i>Own analytics platform</li>
                            <li><i className="fa-solid fa-play"></i>Chat support</li>
                            <li><i className="fa-solid fa-play"></i>Optimize hashtags</li>
                            <li><i className="fa-solid fa-play"></i>Unlimited users</li>
                        </ul>
                        <a href="#">
                            <button className="priceBtn btnLight transition">Get started</button>
                        </a>
                    </div>
                    <div className="pricingTables transition display-flex">
                        <div className="price display-flex">
                            <h1 className="textBig">
                                $399
                            </h1>
                            <p className="textSmall">Multi Design</p>
                        </div>
                        <p className="productName textMedium">Website Page</p>
                        <p className="productDetails textSmall">When you’re ready to go beyond prototyping in Figma, Webflow’s
                            ready to
                            help.</p>
                        <ul className="productAttributes display-flex">
                            <li><i className="fa-solid fa-play"></i>All limited links</li>
                            <li><i className="fa-solid fa-play"></i>Own analytics platform</li>
                            <li><i className="fa-solid fa-play"></i>Chat support</li>
                            <li><i className="fa-solid fa-play"></i>Optimize hashtags</li>
                            <li><i className="fa-solid fa-play"></i>Unlimited users</li>
                        </ul>
                        <a href="#">
                            <button className="priceBtn btnLight transition">Get started</button>
                        </a>
                    </div>
                    <div className="pricingTables transition display-flex">
                        <div className="price display-flex">
                            <h1 className="textBig">
                                $399
                            </h1>
                            <p className="textSmall">Multi Design</p>
                        </div>
                        <p className="productName textMedium">Complex Project</p>
                        <p className="productDetails textSmall">When you’re ready to go beyond prototyping in Figma.</p>
                        <ul className="productAttributes display-flex">
                            <li><i className="fa-solid fa-play"></i>All limited links</li>
                            <li><i className="fa-solid fa-play"></i>Own analytics platform</li>
                            <li><i className="fa-solid fa-play"></i>Chat support</li>
                            <li><i className="fa-solid fa-play"></i>Optimize hashtags</li>
                            <li><i className="fa-solid fa-play"></i>Unlimited users</li>
                            <li><i className="fa-solid fa-play"></i>Assist and Help</li>
                        </ul>
                        <a href="#">
                            <button className="priceBtn btnLight transition">Get started</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing