import React, { use } from 'react'
import AvailablrPlayers from '../availablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const palayers = use(playersPromise);
    console.log(palayers);
    
    
    return (
        <div className='w-10/12 mx-auto'>
            Players : {palayers.length}
          <AvailablrPlayers palayers={palayers}></AvailablrPlayers>
        </div>
    );
};

export default Players;