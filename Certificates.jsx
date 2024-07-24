import React from 'react'
import { useInView } from 'react-intersection-observer'
import website from '../../assets/website-design.png'
import UIUX from '../../assets/networking_resized.jpeg'
import data_Science from '../../assets/OIP (3)_resized.jpeg'
import './Certificates.css'

const Certificates = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: skillBarsRef, inView: skillBarsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: verifyBtnRef, inView: verifyBtnInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id='skills'>
      <span 
        className={`skill-title ${titleInView ? 'fadeInUp' : ''}`} 
        ref={titleRef}
      >
        My Certifications
      </span>
      <span 
        className={`skill-desc ${descInView ? 'fadeInUp' : ''}`} 
        ref={descRef}
      >
        My proficiency in web development ensures the creation of dynamic and responsive websites, guaranteeing an optimal user experience. Equipped with advanced data science certifications, I excel in analyzing complex datasets, deriving valuable insights, and making informed decisions based on data-driven evidence. A comprehensive networking certification, I possess the skills to design, implement, and manage robust network infrastructures, facilitating seamless connectivity and communication within your organization. <b>The verify button will send you to my LinkedIn were you can verify my certifications</b>
      </span>
      <div 
        className={`skillBars ${skillBarsInView ? 'fadeInUp' : ''}`} 
        ref={skillBarsRef}
      >
        <div className="skillBar">
          <img src={UIUX} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Networking</h2>
            <p>COMMSCOPE</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={website} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>UDEMY and SOLOLEARN</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={data_Science} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Science</h2>
            <p>MICROSOFT and UDEMY</p>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/rendani-mulaudzi-81917b252/">
        <button 
          className={`desktopMenuBt ${verifyBtnInView ? 'fadeInUp' : ''}`} 
          ref={verifyBtnRef}
        >
          Click to Verify
        </button>
      </a>
    </section>
  )
}

export default Certificates
