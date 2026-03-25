import React from 'react';
import Players from '../players/Players';
import { MdDeleteForever } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(SelectedPlayers, 'selectedPlayers');
    
     const handleDeleteSelectedPlayers = (player) => {
        console.log(selectedPlayers, "selectedPlayers");
        const filteredPlayers = selectedPlayers.filter(item => item.player_name !== player.player_name)
        console.log(filteredPlayers)
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.price)
     }
    return (
        <div>
            <div className='space-y-5'>
               {selectedPlayers.map((player, ind) => {
                return <div key={ind}  className='flex items-center gap-6 justify-between p-6 rounded-2xl border'>
                    <div className='flex items-center gap-6'>
                        <img src={player.image} alt={player.player_name} className='h-[70px] w-auto rounded-md' />
                        <div>
                           <h2 className='flex items-center gap-2 font-semibold text-xl'><FaRegUser /> {player.player_name}</h2>
                           <p>{player.player_type}</p>
                        </div>
                    </div>
                    <button className='btn text-red-500' onClick={()=> handleDeleteSelectedPlayers(player)}><MdDeleteForever /></button>
                </div>
            })}    
            </div>
         
        </div>
    );
};

export default SelectedPlayers;