import React from 'react'

const BlogDisplay = (props) => {
  return (
      <div className="blogDisplay">
          <div className="blogImg">
              <img src={props.blogImgPath} alt="blogImg1" />
          </div>
          <div className="blogTxts">
              <p className="blogDate textSmall textMedium">{props.blogDate}</p>
              <h3 className="blogHeading textMedium">{props.blogHeading}</h3>
              <p className="blogDetails textSmall">{props.blogDetails}</p>
              <p className="blogFooter textSmall textMedium">
                  <a className="transition" href="#">Read More<i
                      className="transition fa-solid fa-arrow-right-long"></i></a>
              </p>
          </div>
      </div>
  )
}

export default BlogDisplay