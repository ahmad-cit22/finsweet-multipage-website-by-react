import React from 'react';
import './banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <div className="banner">
          <div className="container bannerBox display-flex commonPadding">
              <div className="bannerTxtBox">
                  <h1 className="textBig">Building stellar websites for early startups</h1>
                  <p className="textSmall textMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor
                      incididunt.</p>
                  <div className="bannerBtnBox">
                      <Link to="/works">
                          <button className="bannerBtn textSmall textMedium btnLight transition">View Our Works</button>
                      </Link>
                      <Link to="/pricing"><button className="bannerBtn textSmall textMedium btnDark transition">View
                          Pricing<i className="fa-solid fa-arrow-right-long"></i></button></Link>
                  </div>
              </div>
              <div className="bannerImgBox">
                  <img src="images/banner_img.png" alt="banner_img" />
              </div>
          </div>
      </div>
  )
}

export default Banner