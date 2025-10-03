import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottom from '../components/Home/HomeBottom'

const Home = () => {
  return (
    <>
    <div className='h-screen w-screen fixed' >
      <Video />
    </div>
     <div className='h-full w-full relative flex flex-col justify-between gap-40 '>
        <HomeHeroText />
        <HomeBottom />
     </div>
    </>
  )
}

export default Home