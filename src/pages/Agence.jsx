import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

 gsap.registerPlugin(ScrollTrigger)

 
const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 20%',
        end: 'top -180%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='saction1'>
        <div ref={imageDivRef} className='absolute lg:h-[20vw] h-[35vw] lg:w-[15vw] w-[30vw] overflow-hidden lg:rounded-4xl rounded-xl  lg:top-40 top-30 left-[30vw]'>
          <img ref={imageRef} className=' h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh] '>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Sixty-seventh <br />
              Twelve</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-6xl leading-tight  sm:absolute sm:text-center sm:right-10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a story. If we forget that, we may make good numbers in the short term, but we'll kill it in the long term. That's why we're committed to providing perspective, to building influential brands.</p>
          </div>
        </div>
      </div>
      <div className='saction2 h-screen'>
      </div>
    </div>
  )
}

export default Agence