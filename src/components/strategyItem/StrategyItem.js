import React from 'react'

const StrategyItem = (props) => {
  return (
      <div className="strategies">
          <div className="strategyNum">
              <img src="images/about1.png" alt="strategyNum" /><span>{props.strategyNum}</span>
          </div>
          <h1 className="textLarge">{props.strategyTitle}</h1>
          <p className="textSmall">
              {props.strategyDetails}
          </p>
      </div>
  )
}

export default StrategyItem