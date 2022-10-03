import React from 'react'
import './blog.css'
import BlogDisplay from '../blogDisplay/BlogDisplay'

const Blog = () => {
    return (
        <div className="blog">
            <div className="container blogBox commonPadding">
                <div>
                    <h1 className="blogBoxHeading textBig">Our Blog</h1>
                </div>
                <div className="blogGallery display-flex">
                    <BlogDisplay blogImgPath="images/blog1.png" blogDate="19 Jan 2022" blogHeading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogDetails="See how pivoting to Webflow changed one person’s sales strategy
                  and allowed him to...."  />
                    <BlogDisplay blogImgPath="images/blog2.jpg" blogDate="19 Jan 2022" blogHeading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogDetails="See how pivoting to Webflow changed one person’s sales strategy
                  and allowed him to...."  />
                    <BlogDisplay blogImgPath="images/blog3.png" blogDate="19 Jan 2022" blogHeading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" blogDetails="See how pivoting to Webflow changed one person’s sales strategy
                  and allowed him to...."  />
                </div>
            </div>
        </div>
    )
}

export default Blog