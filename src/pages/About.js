import React from 'react'
import AboutBanner from '../components/aboutBanner/AboutBanner'
import BenefitsPart from '../components/benefitsPart/BenefitsPart'
import Concerns from '../components/concerns/Concerns'
import Faq from '../components/faq/Faq'
import Features from '../components/features/Features'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Strategy from '../components/strategy/Strategy'

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Strategy />
            <BenefitsPart />
            <Concerns />
            <Faq />
            <Footer />
        </>
    )
}

export default About