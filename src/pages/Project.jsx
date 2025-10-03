import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project = () => {

    const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }
]

 gsap.registerPlugin(ScrollTrigger)

 useGSAP(function () {
    gsap.from('.hero', {
      height: '20px',
      stagger: {
        amount: 0.1
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 '>
      <div className=' pt-[35vh]'>
        <h1 className='font-[font2] lg:text-[13vw] text-[20vw]'>PROJETS</h1>
      </div>
      <div className=' lg:-mt-20 lol'>
       
        {projects.map((elem,idx)=>{
          return  <div key={idx} className='hero  lg:w-full w-[100%]  lg:h-[700px] h-[400px] flex lg:flex-row flex-col mb-4 lg:gap-4  gap-2 '>
          <ProjectCard  image1={elem.image1}  image2={elem.image2}/>
          </div>
        })} 
      </div>
    </div>
  )
}

export default Project