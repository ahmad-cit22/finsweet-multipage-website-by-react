import React from 'react'
import './aboutBanner.css'

const AboutBanner = () => {
  return (
    <div className="aboutBanner">
      <div className="container aboutBannerBox commonPadding display-flex">
        <div className="aboutBannerPart1">
          <span className="textSmall textMedium">About Us</span>
          <h1 className="textBig">Our designs solve problems</h1>
          <p className="textSmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="aboutBannerPart2">
          <img src="images/aboutBnrImg.png" alt="FeatureImg3" />
        </div>
      </div>
    </div>
  )
}

export default AboutBanner