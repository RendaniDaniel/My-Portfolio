import React from 'react'
import './Introduction.css'
import { Link } from 'react-scroll'
import image from '../../assets/image_me.png'
import hire_image from '../../assets/hireme.png'
const Introduction = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Rendani</span> <br />Data Scientist & Developer</span>
            <p className='introPara'>Proficient in Data Science and Web Development, merging analytical prowess with <br/>creative coding skills.</p>
            <Link><button className='btn'> <img src={hire_image} alt="" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={image} alt="" className='bg' />
    </section>
  )
}

export default Introduction