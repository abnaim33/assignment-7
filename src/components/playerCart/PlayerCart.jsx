import React from 'react'
import './Playercart.css'
const PlayerCart = ({ cart }) => {
    let total = 0;

    for (const player of cart) {

        total = total + player.salary

    }

    return (
        <div className='cart'>
            {cart.length === 0 &&
                <h1>Your player cart is empty</h1>}

            {
                cart.map(player => (
                    <div key={player.id} className="cart-item">
                        <img src={player.image} alt="" />
                        <div>

                            <h3>{player.name}</h3>

                            <p>Salary: {player.salary}</p>
                        </div>
                    </div>
                ))
            }

            <h4 > Total Salary TK {total}</h4>

        </div>
    )
}

export default PlayerCart