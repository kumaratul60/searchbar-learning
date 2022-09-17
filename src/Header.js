import React from 'react'
import "./Header.css"

const Header = () => {
    // ({})
    return (
        <div className="container">
            <div className="left">
                <div className="logo">
                    <img src="" alt="lego" />
                </div>
                <div className="input">
                    <input type="text" />
                </div>

            </div>
            <div className="right">
                <div className="signup">signup</div>
                <div className="return">return</div>
                <div className="basket">basket</div>
            </div>

        </div>
    )
}

export default Header