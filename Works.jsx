import React from 'react'
import { useInView } from 'react-intersection-observer'
import './Works.css'
import Web from '../../assets/web_1_resized.png'
import graceful from '../../assets/Graceful_resized.png'

const Works = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: imgsRef, inView: imgsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id='works'>
      <h2 
        className={`workstitle ${titleInView ? 'fadeInUp' : ''}`} 
        ref={titleRef}
      >
        My Portfolio
      </h2>
      <span 
        className={`worksDesc ${descInView ? 'fadeInUp' : ''}`} 
        ref={descRef}
      >
        As a web developer, I revamped sites with responsive designs and dynamic content management systems. As a data scientist, I analyzed customer behavior, developed predictive models, and informed targeted marketing, driving strategic decisions and enhancing user experience.
       <br/> <br/><b> To view more about my projects visit my GitHub <br/>
      <br /> Click on the images to view different projects</b>
      </span>
      <div 
        className={`worksImgs ${imgsInView ? 'fadeInUp' : ''}`} 
        ref={imgsRef}
      >
        <a href="https://tc-shivambu.web.app">
          <img src={Web} alt="" className='worksImg'/>
        </a>
        <a href="https://graceful-gifts.web.app/">
          <img src={graceful} alt="" className='worksImg'/>
        </a>
        <a href="https://tc-shivambu.web.app">
          <img src={Web} alt="" className='worksImg'/>
        </a>
      </div>
    </section>
  )
}

export default Works
