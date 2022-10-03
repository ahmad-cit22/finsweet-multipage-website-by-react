import React from 'react'

const FeatureShowcaseBox = (props) => {
  return (
      <div className="container featureShowcaseBox commonPadding display-flex">
          <div className="featureShowcasePart1">
              <span className="textSmall textMedium">{props.FeatureShowcaseHeader}</span>
              <h1 className="textBig">{props.FeatureShowcaseTitle}</h1>
              <p className="textSmall">{props.FeatureShowcaseDetails}</p>
          </div>
          <div className="featureShowcasePart2">
              <img src={props.FeatureShowcaseImgPath} alt="FeatureImg5" />
          </div>
      </div>
  )
}

export default FeatureShowcaseBox