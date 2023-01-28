import React from 'react'

const FeatureContent = (props) => {
  return (
      <div className="featureContents">
          <div className="featureIcon"><img src={props.featureIconRef} alt="Icon1" /></div>
          <p className="textMedium">{props.featureTitle}</p>
          <p className="textSmall textLight">{props.featureDetails}</p>
      </div>
  )
}

export default FeatureContent