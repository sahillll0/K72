import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
    <div className='group lg:w-1/2 h-full relative transition-all rounded-none hover:rounded-[50px] overflow-hidden cursor-pointer '>
          <img className='w-full h-full object-cover' src={props.image1} alt="" />
          <div className='opacity-0 group-hover:opacity-100 transition-all absolute  flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
            <h2 className='p-4 text-white border-white uppercase text-3xl rounded-full font-[font1] border-3'>voir le projet</h2>
          </div>
          </div>
           <div className='group lg:w-1/2 h-full relative transition-all rounded-none hover:rounded-[50px] overflow-hidden cursor-pointer '>
          <img className='w-full h-full object-cover' src={props.image2} alt="" />
          <div className='opacity-0 group-hover:opacity-100 transition-all absolute  flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
            <h2 className='p-4 text-white border-white uppercase text-3xl rounded-full font-[font1] border-3'>voir le projet</h2>
          </div>
          </div>
    </>

  )
}

export default ProjectCard