import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import BlogBanner from '../components/blogBanner/BlogBanner'
import BlogShowcase from '../components/blogShowcase/BlogShowcase'

const Blogs = () => {
    return (
        <>
            <Navbar />
            <BlogBanner />
            <BlogShowcase />
            <Footer />
        </>
    )
}

export default Blogs