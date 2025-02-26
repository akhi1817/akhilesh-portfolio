import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const About = () => {
  return (
    <>
    <div className='container bg-light' style={{marginTop:'100px'}}>
      <div className='row'>
        <div className='col-md-6 mt-5' data-aos='fade-left'>
            <img src='assets/about.png' className='img-fluid'/>
        </div>
        <div className='col-md-6 mt-5' data-aos='fade-right'>
            <h1 className='display-5 fw-bold' data-aos='zoom-out'>About me</h1>
            <h5 className='mt-5'> <FaArrowRight className='fs-4' /> Full Stack Developer skilled in MERN stack, building scalable and efficient web applications.</h5>  
            <h5 className='mt-5'> <FaArrowRight className='fs-4' /> Passionate about UI/UX, crafting dynamic, responsive, and high-performance user experiences.</h5>  
            <h5 className='mt-5'> <FaArrowRight className='fs-4' /> Experienced in API development & database management for seamless frontend-backend integration.</h5>  
            <h5 className='mt-5'> <FaArrowRight className='fs-4' /> Continuously learning and exploring new technologies to build innovative digital solutions.</h5>  
        </div>
        
      </div>
    </div>
    </>
  )
}

export default About
