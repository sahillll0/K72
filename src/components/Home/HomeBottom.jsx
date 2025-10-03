import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottom = () => {
  return (
    <div className='font-[font2] mt-50 lg:mt-0 flex items-end-safe justify-center lg:gap-2 '>
      <p className='absolute font-[font1] lg:w-80 lg:text-[0.9vw] text-[3vw] lg:left-[75vw] left-25 text-white lg:right-10   bottom-60 lg:bottom-50 leading-relaxed '>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.

</p>
      <div className='font-[font2] flex items-end-safe justify-center lg:gap-2 gap-7 '>
   <div className='border-3 text-white hover:border-[#D3FD50]  hover:text-[#D3FD50] transition-colors duration-300 lg:h-44 flex items-center border-white rounded-full lg:px-10 px-5 uppercase'>
     <Link className=' lg:text-[6vw] text-3xl pt-2 ' to='/projects'>Projects</Link>
   </div>
    <div className='border-3 text-white hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300 lg:h-44 flex items-center border-white rounded-full px-5 mr-5 uppercase'>
      <Link className=' lg:text-[6vw] text-3xl pt-2' to='/agence'>Agence</Link>
    </div>
</div>
    </div>
  )
}

export default HomeBottom