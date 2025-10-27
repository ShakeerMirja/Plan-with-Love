import React from 'react'
import Cards from './Cards'
function Tours({tours,removeTour}) {
  return (
    <div className='flex  flex-col justify-center bg-gray-100 items-center'>
        <div>
              <h2 className='text-center text-6xl border-dashed border-6  font-bold border-[rgb(1,17,160)] px-20 py-4 rounded-2xl mt-10 mb-10'>Plan With Love</h2>
        </div>
        

        <div className='flex flex-row flex-wrap justify-center  w-[1300px] space-y-3 '>
            {
                tours.map((tour) => {
                    return <Cards  key ={tour.id} {...tour} removeTour={removeTour} ></Cards>               //form collection of objects{'tours'} we are taking one by one object from tours array using map and making a copy of each object 'tour' and sending to next component
                })
            }
        </div>
        

    </div>
  )
}

export default Tours