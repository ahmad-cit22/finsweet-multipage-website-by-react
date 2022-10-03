import React from 'react'
import StrategyItem from '../strategyItem/StrategyItem'
import './strategy.css'

const Strategy = () => {
    return (
        <div className="about">
            <div className="container aboutBox commonPadding display-flex">
                <div className="aboutTxt">
                    <h1 className="textBig">How we work</h1>
                    <p className="textSmall aboutTxtDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor.</p>
                    <p className="textSmall aboutTxtFooter"><a href="#" className="transition">
                        Get in touch with us<i className="fa-solid fa-arrow-right-long"></i>
                    </a></p>

                </div>
                <div className="strategyBox">
                    <StrategyItem strategyNum="01" strategyTitle="Strategy" strategyDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                    <StrategyItem strategyNum="02" strategyTitle="Wireframing" strategyDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                    <StrategyItem strategyNum="03" strategyTitle="Design" strategyDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                    <StrategyItem strategyNum="04" strategyTitle="Development" strategyDetails="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                </div>
            </div>
        </div>
    )
}

export default Strategy