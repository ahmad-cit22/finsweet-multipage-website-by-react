import React from 'react'
import './readBlogBanner.css'

const ReadBlogBanner = () => {
  return (
      <div className="blogBanner readBlog">
          <div className="container blogBannerBox text-center">
              <h1 className="textBig">A UX Case Study on Creating a Studious Environment for Students</h1>
              <p className="textSmall textMedium"><span>Andrew Jonson |</span>Posted on 27th January 2021</p>
              <div className="blogBannerImg">
                  <img src="images/blogs/blogBnrImg.png" alt="blogBannerImg" />
              </div>
          </div>
      </div>
  )
}

export default ReadBlogBanner