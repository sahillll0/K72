import React from 'react'


const Video = () => {
  return (
    <div className='h-full w-full'>
        <video
         className='h-full w-full object-cover' 
        src="/public/video/bgvideo.mp4" 
         autoPlay 
         loop 
         muted 
         playsInline
        loading="lazy"
        >
        <source
         src='/public/video/bgvideo.mp4'
         type='video/mp4' />
        Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video