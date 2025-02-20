import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import saykIcon from './icon/03.png'; 
import ProdjIcon from './icon/01.png'; 
import lightFilledIcon from './icon/04.png';  
import lightOutlinedIcon from './icon/06.png'; 
import { ThemeContext } from './ThemeContext';
import './BottomMenu.css';

const BottomMenu = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const [selected, setSelected] = useState('Prodj');
    const [isLight, setIsLight] = useState(false); 
    const navigate = useNavigate(); 

    const handleIconClick = (iconName) => {
        setSelected(iconName);
        switch (iconName) {
            case 'sayk':
                navigate('/sayk'); 
                break;
            case 'Prodj':
                navigate('./Prodj'); 
                break;
            default:
                break;
        }
    };

    const toggleLightIcon = () => { 
        setIsLight(!isLight);
        toggleTheme();
    };

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    return (
        <div className="menuContainer">
            <div 
                className={`iconContainer ${selected === 'Prodj' ? 'selected' : ''}`} 
                onClick={() => handleIconClick('Prodj')}
            >
                <img src={ProdjIcon} alt="Prodj" width={30} height={30} />
            </div>
            
            <div 
                className={`iconContainer ${selected === 'sayk' ? 'selected' : ''}`} 
                onClick={() => handleIconClick('sayk')}
            >
                <img src={saykIcon} alt="sayk" width={30} height={30} />
            </div>
            
            <div 
                className={`iconContainer ${selected === 'light' ? 'selected' : ''}`} 
                onClick={toggleLightIcon} 
            >
                {isLight ? (
                    <img src={lightFilledIcon} alt="light" width={30} height={30} /> 
                ) : (
                    <img src={lightOutlinedIcon} alt="light" width={30} height={30} /> 
                )}
            </div>
        </div>
    );
};

export default BottomMenu;
