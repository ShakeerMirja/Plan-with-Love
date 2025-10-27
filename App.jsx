import React, { useState } from 'react';
import Tours from './components/Tours';
import data from './data';
function App() {
  const [tours,setTrips]=useState(data)


  function removeTour(id){
    const filteredTours=tours.filter( tour => tour.id !== id);
    setTrips(filteredTours);
  }

  if(tours.length===0){
    return(
      <div className='flex flex-col justify-center items-center space-y-4 h-screen w-screen'>
        <p class='font-bold text-2xl text-black'>No Tours Left</p>
        <button  className='px-12 py-2 text-black bg-gray-200 rounded-md hover:bg-white' onClick={() => setTrips(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className=''>
      <Tours tours={tours}  removeTour={removeTour} ></Tours>
      
      
    </div>
  )
}

export default App