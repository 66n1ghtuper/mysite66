import React from 'react';
import './Card.css';
import likeIcon from './icon/222.png';
import importIcon from './icon/156.png'; 

const Card = ({ gifUrl, description, likes, onLike }) => {
    const importLink = "https://github.com/66n1ghtuper"; 

    return (
        <div className="card">
            <img className="card__img" src={gifUrl} alt={description} />
            <a href={importLink} target="_blank" rel="noopener noreferrer">
                <button className="import-button">
                    <img src={importIcon} alt="Import" className="import-icon" />
                </button>
            </a> 
            <div className="card__footer">
                <span className="description">{description}</span>
                <div className="like-section">
                    <span className="likes-count">{likes} Likes</span>
                    <button className="like-button" onClick={onLike}>
                        <img src={likeIcon} alt="Like" className="like-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;


