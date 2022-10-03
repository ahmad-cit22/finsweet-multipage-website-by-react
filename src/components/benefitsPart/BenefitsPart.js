import React from 'react'
import './benefitsPart.css'
import FeatureContent from '../featureContent/FeatureContent'

const BenefitsPart = () => {
    return (
        <div className="benefits">
            <div className="container benefitsBox">
                <div className="benefitsBoxTxt text-center">
                    <h1 className="textBig">The benefits of working with our team</h1>
                </div>
                <div className="featureGallery display-flex">
                    <FeatureContent featureIconRef="images/icons/Icon6.png" featureTitle="Customize with ease" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                    <FeatureContent featureIconRef="images/icons/Icon3.png" featureTitle="Perfectly Responsive" featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." />
                    <FeatureContent featureIconRef="images/icons/Icon1.png" featureTitle="Friendly Support" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
                </div>
            </div>
        </div>
    )
}

export default BenefitsPart