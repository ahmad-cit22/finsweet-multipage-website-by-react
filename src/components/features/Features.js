import React from 'react'
import FeatureContent from '../featureContent/FeatureContent'
import './features.css'

const Features = () => {
  return (
      <div className="features">
          <div className="container featureBox commonPadding">
              <div className="featureTxts text-center">
                  <p className="textSmall textMedium">
                      Features
                  </p>
                  <h1 className="featureHeading textBig">
                      Design that solves problems, one product at a time
                  </h1>
              </div>
              <div className="featureGallery display-flex">
                  <FeatureContent featureIconRef="images/icons/Icon1.png" featureTitle="User Client First" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                  <FeatureContent featureIconRef="images/icons/Icon2.png" featureTitle="Two Free Revision Round" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                  <FeatureContent featureIconRef="images/icons/Icon3.png" featureTitle="Template Customization" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                  <FeatureContent featureIconRef="images/icons/Icon4.png" featureTitle="24/7 Support" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                  <FeatureContent featureIconRef="images/icons/Icon5.png" featureTitle="Quick Delivery" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                  <FeatureContent featureIconRef="images/icons/Icon6.png" featureTitle="Hands-on approach" featureDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
              </div>
          </div>
      </div>
  )
}

export default Features