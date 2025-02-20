import React from 'react';
import WIcon from './icon/002.png'; 
import XIcon from './icon/001.png'; 
import './Header.css'; 

const Header = () => {
    const handleWClick = () => {
        window.location.href = "https://t.me/adm66n1"; 
    };

    const handleXClick = () => {
        window.location.href = "https://github.com/66n1ghtuper"; 
    };

    return (
        <header className="headerContainer">
            <h1 className="logo">66nightuper</h1>
            <div className="buttonContainer">
                <button className="headerButton" onClick={handleWClick}>
                    <img src={WIcon} alt="headerButton" width={35} height={35} />
                </button>
                <button className="headerButton" onClick={handleXClick}>
                    <img src={XIcon} alt="headerButton" width={35} height={35} />
                </button>
            </div>
        </header>
    );
};

export default Header;
