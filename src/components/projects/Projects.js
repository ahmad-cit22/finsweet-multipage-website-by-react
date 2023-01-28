import React from 'react'
import './projects.css'
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="projects">
            <div className="container projectBox commonPadding">
                <div className="projectHeading display-flex">
                    <h1 className="textBig">View our projects</h1><Link to="/works"><span className="transition textSmall textMedium">View
                        More<i className="fa-solid fa-arrow-right-long"></i></span></Link>
                </div>
                <div className="projectGallery display-flex">
                    <div className="mainImgBox">
                        <div className="overlay transition">
                            <h1 className="textBig projectNames">Workhub office Webflow Webflow Design</h1>
                            <p className="textSmall projectDescription">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                            </p>
                            <a className="projectFooter" href="#"><span>View project<i
                                className="transition fa-solid fa-arrow-right-long"></i></span></a>
                        </div>
                        <img className="part1Img" src="images/project_img1.png" alt="projectImg1" />
                    </div>
                    <div className="projectPart2">
                        <div className="part2ImgBox">
                            <div className="overlay">
                                <h1 className="textBig projectNames">Unisaas Website
                                    Design</h1>
                                <a className="projectFooter" href="#"><span>View portfolio<i
                                    className="transition fa-solid fa-arrow-right-long"></i></span></a>
                            </div>
                            <img className="part2Img" src="images/project_img2.png" alt="projectImg2" />
                        </div>
                        <div className="part2ImgBox">
                            <div className="overlay">
                                <h1 className="textBig projectNames">Another Website
                                    Design</h1>
                                <a className="projectFooter" href="#"><span>View Website<i
                                    className="transition fa-solid fa-arrow-right-long"></i></span></a>
                            </div>
                            <img className="part2Img" src="images/project_img3.png" alt="projectImg3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects