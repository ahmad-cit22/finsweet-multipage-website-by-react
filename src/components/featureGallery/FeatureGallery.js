import React from 'react'
import FeatureShowcaseBox from '../featureShowcaseBox/FeatureShowcaseBox'
import './featureGallery.css'

const FeatureGallery = () => {
    return (
        <div>
            <div className="featureShowcase">
                <FeatureShowcaseBox
                    FeatureShowcaseHeader="Use Client-first"
                    FeatureShowcaseTitle="Top agencies and freelancers around the world use Client-first"
                    FeatureShowcaseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    FeatureShowcaseImgPath="images/features/FeatureImg3.png"
                />
            </div>
            <div className="featureShowcase featureShowcase-reverse">
                <FeatureShowcaseBox FeatureShowcaseHeader="24/7 Support" FeatureShowcaseTitle="Working with us, you will be getting 24/7 priority support" FeatureShowcaseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." FeatureShowcaseImgPath="images/features/FeatureImg5.png" />
            </div>
            <div className="featureShowcase">
                <FeatureShowcaseBox FeatureShowcaseHeader="Free Revision Rounds" FeatureShowcaseTitle="Get free Revisions and one week of free maintenance" FeatureShowcaseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." FeatureShowcaseImgPath="images/features/FeatureImg4.png" />
            </div>
            <div className="featureShowcase featureShowcase-reverse">
                <FeatureShowcaseBox FeatureShowcaseHeader="Quick Delivery" FeatureShowcaseTitle="Guaranteed 1 week delivery for standard five pager website" FeatureShowcaseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." FeatureShowcaseImgPath="images/features/FeatureImg2.png" />
            </div>
        </div>
    )
}

export default FeatureGallery