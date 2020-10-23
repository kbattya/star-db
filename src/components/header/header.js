import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div><h1>Star DB</h1></div>
            <div className="nav-menu">
                <a className="nav" href="#">People</a>
                <a className="nav" href="#">Planets</a>
                <a className="nav" href="#">Starships</a>
            </div>
        </div>
    );
};

export default Header;