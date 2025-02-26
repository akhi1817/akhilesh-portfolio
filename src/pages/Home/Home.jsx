import React from 'react';
import './Home.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
        <div className='container' style={{marginTop:'100px'}}>
          <div className='row mt-5'>
            <div className='col-md-6 mt-5' data-aos='fade-right'>
                <h1 className='display-4 fw-bold'>Hi,I'm Akhilesh</h1>
                <p className='text-dark'>"I'm Akhilesh Kumbhar, a passionate full-stack developer skilled in MERN stack, crafting clean, responsive, and user-friendly web applications."</p>
                <p className='text-dark mt-3'><FaLocationDot /> Pune,Maharashtra.</p>
                <Link data-aos='zoom-in' to='contact' smooth={true} duration={1000} className='btn btn-primary px-4 rounded-pill fw-bold'>Contact Me</Link>
            </div>
            <div className='col-md-6 ' data-aos='fade-left'>
                  <img className='framed img-fluid ms-5' src='assets/profile.png'/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
