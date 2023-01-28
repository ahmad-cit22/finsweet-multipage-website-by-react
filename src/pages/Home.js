import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Strategy from '../components/strategy/Strategy';
import Projects from '../components/projects/Projects';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import Faq from '../components/faq/Faq';
import Contact from '../components/contact/Contact';
import Blog from '../components/blog/Blog';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Strategy />
      <Projects />
      <Features />
      <Testimonials />
      <Faq />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}

export default Home