import React, { useState } from 'react';
function Cards({id,price,info,name,image,removeTour}) {
    
    const [readmore,setReadmore]=useState(true);
    function readmoreHandler(){
        setReadmore(!readmore);
    }

    const description= readmore ? `${info.substring(0,200)}....` : info;
    

    
  return (
    <div className='flex flex-col w-[400px] border-gray-300 bg-white rounded-lg pt-3 pb-4 px-1.5 m-4 shadow-lg'>
        <img  className='w-full  aspect-square  px-1 pt-1 mb-5'  src={image}></img>
         <div className='trip-details px-2.5 flex flex-col'>
            <h3  className='text-red-500 font-bold text-3xl mb-4'>₹{price}</h3>
            <div className='text-black font-bold text-3xl'>{name}</div>

          <div className='text-black font-normal text-md   whitespace-normal w-full'>
              {description}
              <span className='cursor-pointer text-[#12b0e8]' onClick={readmoreHandler}>
                {readmore?`Read More` :`Show Less`}
              </span>
         </div>
            
         </div>
         
         


         <button className='btn-red  px-12 py-2 text-black font-bold flex  text-2xl mx-auto place-items-center
          border-red-500 border-2 mt-8 mb-4 rounded-xl hover:bg-amber-600 hover:text-white transition:all duration-200' onClick={ () => removeTour(id)}>
                Not Interested
         </button>
         

    </div>
  )
}

export default Cards