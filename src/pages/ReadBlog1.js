import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ReadBlogBanner from '../components/readBlogBanner/ReadBlogBanner'
import ReadBlogMain from '../components/readBlogMain/ReadBlogMain'

const ReadBlog1 = () => {
    return (
        <>
            <Navbar />
            <ReadBlogBanner />
            <ReadBlogMain />
            <Footer />
        </>
    )
}

export default ReadBlog1