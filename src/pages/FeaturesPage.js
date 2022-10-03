import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import FeatureBanner from '../components/featureBanner/FeatureBanner'
import Concerns from '../components/concerns/Concerns'
import BenefitsPart from '../components/benefitsPart/BenefitsPart'
import FeatureGallery from '../components/featureGallery/FeatureGallery'
import Faq from '../components/faq/Faq'

const FeaturesPage = () => {
    return (
        <>
            <Navbar />
            <FeatureBanner />
            <Concerns />
            <BenefitsPart />
            <FeatureGallery />
            <Faq />
            <Footer />
        </>
    )
}

export default FeaturesPage