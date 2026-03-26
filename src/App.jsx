import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Players from './component/players/Players'
import { Suspense, useState } from 'react'
import { ToastContainer} from 'react-toastify';

const fatchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json()
} 

function App () {
  const playersPromise = fatchPlayer()
  const [coin, setCoin] = useState(50000)
  
  return (
    <>
     <Navbar coin={coin}></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
     </Suspense>
     {/* react toastifi */}
      <ToastContainer />
    </>
  )
}

export default App
