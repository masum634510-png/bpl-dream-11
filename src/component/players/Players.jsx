import { use, useState } from 'react'
import AvailablrPlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
    const palayers = use(playersPromise);
    console.log(palayers);
    
    const [selectedType, setSelectedType] = useState("Available")
    console.log(selectedType, "selectedType")
    const [selectedPlayers, setSelectedPlayers] = useState([])
    
    return (
        <div className='w-10/12 mx-auto my-[60px]'>
          <div className='flex justify-between items-center mb-[20px]'>
           { selectedType === "Available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players({selectedPlayers.length}/{palayers.length})</h2>}
            <div>
             <button
                onClick = {() => setSelectedType("Available")}
                className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
            <button 
                 onClick={() => setSelectedType("Selected")}
                className={`btn ${selectedType === "Selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
            </div>
          </div>
         { selectedType === "Available" ? <AvailablrPlayers palayers={palayers} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablrPlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} ></SelectedPlayers>}
        </div>
    );
};

export default Players;