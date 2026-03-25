import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Players from './component/players/Players'
import { Suspense } from 'react'

const fatchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json()
} 

function App () {
  const playersPromise = fatchPlayer()
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
      <Players playersPromise={playersPromise}></Players>
     </Suspense>
    </>
  )
}

export default App
