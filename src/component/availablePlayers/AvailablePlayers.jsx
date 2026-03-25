import React from 'react';
import Card from "../ui/Card"
const AvailablePlayers = ({ palayers, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    palayers.map((player) => {
                    return <Card key={player.player_name} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                    })
                }

            </div>
        </div>
    );
};

export default AvailablePlayers;