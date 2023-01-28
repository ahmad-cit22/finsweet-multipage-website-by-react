import React from 'react'
import './worksShowcase.css'
import { Link } from "react-router-dom";


const WorksShowcase = () => {
  return (
    <>
      <div className="works">
        <div className="container workBox text-center">
          <span className="textSmall textMedium">What We Created</span>
          <h1 className="textBig">Our Work Portfolio</h1>
          <p className="textSmall textMedium">We help teams create great digital products by providing them with tools and
            technology to
            make the design-to-code process universally accessible.</p>
          <div className="workIcons display-flex">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="workShowcase">
        <div className="container workShowcaseBox">
          <div className="workShowcaseNav">
            <div className="navItem">
              <ul className="textMedium display-flex">
                <li><a className="navActive" href="index.html">All</a></li>
                <li><a href="about.html">UI Design</a></li>
                <li><a href="features.html">Webflow Design</a></li>
                <li><a href="pricing.html">Figma Design</a></li>
              </ul>
            </div>
          </div>
          <div className="workGallery display-flex">
            <div className="workDisplays">
              <div className="workDisplayImg">
                <img src="images/works/work1.png" alt="work1" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
            <div className="workDisplays">
              <div className="workDisplayImg workDisplayImg2">
                <img src="images/works/work2.png" alt="work2" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
            <div className="workDisplays">
              <div className="workDisplayImg workDisplayImg3">
                <img src="images/works/work3.png" alt="workDisplayImg3" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
            <div className="workDisplays">
              <div className="workDisplayImg workDisplayImg4">
                <img src="images/works/work4.png" alt="workDisplayImg4" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
            <div className="workDisplays">
              <div className="workDisplayImg workDisplayImg5">
                <img src="images/works/work5.png" alt="workDisplayImg5" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
            <div className="workDisplays">
              <div className="workDisplayImg workDisplayImg6">
                <img src="images/works/work6.png" alt="workDisplayImg6" />
              </div>
              <div className="workDisplayTxt">
                <h1 className="workHeading textBig">Template 1</h1>
                <p className="workDetails textSmall">Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <p className="workFooter textSmall textMedium">
                  <a className="transition" href="#">View Portfolio<i
                    className="transition fa-solid fa-arrow-right-long"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="workShowcaseFooterCont">
          <div className="container workShowcaseFooter display-flex">
            <h1 className="textBig">Let's build something great together</h1>
            <p className="textSmall textMedium">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec
              dolor
              sit amet, scelerisque cursus purus.</p>
            <div className="workBtnBox">
              <Link to="/contact">
                <button className="bannerBtn workBtn textSmall textMedium btnLight transition">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WorksShowcase