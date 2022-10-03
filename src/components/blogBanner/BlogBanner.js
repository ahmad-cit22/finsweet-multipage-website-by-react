import React from 'react'
import './blogBanner.css'
import { Link } from "react-router-dom";

const BlogBanner = () => {
  return (
      <div className="blogBanner">
          <div className="container blogBannerBox text-center">
              <h1 className="textBig">A UX Case Study on Creating a Studious Environment for Students</h1>
              <p className="textSmall textMedium"><span>Andrew Jonson |</span>Posted on 27th January 2021</p>
              <div className="blogBannerImg">
                  <img src="images/blogs/blogBnrImg.png" alt="blogBannerImg" />
              </div>
              <div className="blogBannerFooter">
                  <p className="textSmall textMedium">Apparently we had reached a great height in the atmosphere, for the sky
                      was a dead
                      black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea
                      to
                      the level of the spectator on a hillside.</p>
                  <Link className="transition" to="/readBlog1">Read More<i className="transition fa-solid fa-arrow-right-long"></i></Link>
              </div>
          </div>
      </div>
  )
}

export default BlogBanner