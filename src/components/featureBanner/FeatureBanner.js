import React from 'react';
import './featureBanner.css';
import { Link } from "react-router-dom";


const FeatureBanner = () => {
    return (
        <div className="banner">
            <div className="container bannerBox display-flex commonPadding">
                <div className="bannerTxtBox">
                    <h1 className="textBig">All the features you need</h1>
                    <p className="textSmall textMedium featureBnrTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="bannerBtnBox">
                        <Link to="/pricing">
                            <button className="bannerBtn textSmall textMedium btnLight transition">View Pricing</button>
                        </Link>
                    </div>
                </div>
                <div className="bannerImgBox">
                    <img src="images/features/FeatureImg1.svg" alt="FeatureImg1" />
                </div>
            </div>
        </div>
    )
}

export default FeatureBanner