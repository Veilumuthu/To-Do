import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header-title">{props.title}</h1>
                <p className="header-subtitle">{props.subtitle}</p>
            </div>
        </div>
    )
}

export default Header;