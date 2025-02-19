import React, { useEffect, useState } from 'react';
import Card from './Card'; 
import cards from './data'; 
import './Prodj.css'; 

const Prodj = () => {
    const [gifs, setGifs] = useState(cards); 

    const handleLike = (id) => {
        setGifs(gifs.map(gif => gif.id === id ? { ...gif, likes: gif.likes + 1 } : gif));
    };

    const formatLikes = (likes) => {
        if (likes >= 1000) {
            return (likes / 1000).toFixed(1).replace(/\.0$/, '') + 'k'; 
        }
        return likes; 
    };

    useEffect(() => {
        
        const increaseLikes = () => {
            setGifs(prevGifs => 
                prevGifs.map(gif => ({ ...gif, likes: gif.likes + 12 })) 
            );
        };

       
        const intervalId = setInterval(increaseLikes, 5600000);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="Prodj">
            <h1>Проекты</h1>
            <div className="card-container">
                {gifs.map(gif => (
                    <Card 
                        key={gif.id} 
                        gifUrl={gif.gif_url} 
                        description={gif.description} 
                        likes={formatLikes(gif.likes)} 
                        onLike={() => handleLike(gif.id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Prodj;
