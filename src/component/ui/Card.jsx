import React, { use, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'

const Card = ({player}) => {
    const [isSelected, setIsSelected] = useState(false)
    
    return (
        <div className='card bg-base-100  shadow-sm'>
            <figure>
                <img src={player.image} alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>
                    <FaUser /> {player.player_name}
                </h2>
                <div className='flex justify-between'>
                    <div className='flex gap-2 justify-center items-center'>
                        <FaFlag />
                        <p>{player.player_country}</p>
                    </div>
                    <button className='btn'>{player.player_type}</button>
                </div>
                <div className='divider'></div>
                <h2 className='font-bold'>{player.rating}</h2>
                <div className='flex  justify-between gap-3 font-bold'>
                    <p>{player.batting_style}</p>
                    <p className='text-right'>{player.bowling_style}</p>
                </div>

                <div className='card-actions justify-between items-center'>
                    <p className='font-semibold'>{player.price}</p>
                    <button className='btn' onClick={() => setIsSelected(true)}>
                        {isSelected === "true" ? "Selected" : "Choose Players" }
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Card
