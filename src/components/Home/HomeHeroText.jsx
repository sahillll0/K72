import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-80 lg:mt-0 text-white pt-5 text-center'>
        <div className='lg:text-[9.5vw] text-[14vw] uppercase lg:leading-[8vw] leading-[13vw] flex items-center justify-center'>L'étincelle</div>
        <div className='lg:text-[9.5vw] text-[14vw] uppercase lg:leading-[8vw] leading-[13vw] flex items-center justify-center'>qui 
        <div className='h-[8vw] w-[16vw] overflow-hidden rounded-full -mt-3'> <Video /> </div> génère</div>
        <div className='lg:text-[9.5vw] text-[14vw]  uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText