import React from 'react'
import './Contact.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
const Contact = () => {
  
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f2703c79-9a94-4ffe-a66e-6f3e3226023e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Fill out the form below to contact Me or click on the media Icons</span>
            <form action="" className='contactForm' onSubmit={onSubmit}>

                <input type="text" name="name" className='name' placeholder='Your Name' required />

                <input className='email'type="email" name="email" placeholder='Email'required />

                <textarea name="message" className='msg' id="" rows='5' placeholder='Your message' required></textarea>

                <button type="submit" className='submitBtn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
        <div className='links'>
        <a href='https://wa.me/+27812745612'>
          <RiWhatsappLine size={50} color='white'/>
          </a>
          
           <a href="https://github.com/RendaniDaniel">
           <FaGithub size={40} color='white'/>
           </a>
           
           <a href="https://www.linkedin.com/in/rendani-mulaudzi-81917b252/">
           <TiSocialLinkedinCircular size={60} color='white'/>
           </a>


        </div>
    </section>
  )
}

export default Contact