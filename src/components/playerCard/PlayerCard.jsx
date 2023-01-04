import React from 'react';

import './PlayerCard.css';

import Button from 'react-bootstrap/Button';
const PlayerCard = ({ player, handleAddToClub }) => {

    const { name, image, salary } = player;

    return (
        <div className='player'>
            <img src={image} alt=""></img>
            <div className='player-info'>
                <p className='player-name'>{name}</p>
                <p>Salary: Tk. {salary}</p>

            </div>

            {/* bootstrap used in this line */}

            <Button variant="primary"
                onClick={() => handleAddToClub(player)}
            >
                Add to Cart

            </Button>

        </div>
    );
};

export default PlayerCard;