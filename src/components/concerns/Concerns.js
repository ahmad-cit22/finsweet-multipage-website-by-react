import React from 'react'
import './concerns.css'

const Concerns = () => {
    return (
        <div className="users">
            <div className="container usersBox display-flex">
                <div className="usersNum">
                    <h1 className="textBig">100,000+</h1>
                    <p className="textSmall">Figma Users</p>
                </div>
                <div className="userLogos display-flex">
                    <img src="images/features/featureLogo1.png" alt="featureLogo" />
                    <img src="images/features/featureLogo2.png" alt="featureLogo" />
                    <img src="images/features/featureLogo3.png" alt="featureLogo" />
                    <img src="images/features/featureLogo4.png" alt="featureLogo" />
                    <img src="images/features/featureLogo5.png" alt="featureLogo" />
                </div>
            </div>
        </div>
    )
}

export default Concerns