import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
  return (
    <>
        <div className='container' style={{marginTop:'100px'}}>
          <div className='row'>
            <h1 className='display-4 fw-bold text-center' data-aos='zoom-in'>Skills</h1>
            <div className='col-md-1d-flex justify-content-around'>
              <div className='col-md-12 d-flex justify-content-around flex-column flex-md-row mt-5'data-aos='fade-left'>
                    <FaHtml5     style={{fontSize:"120px",color:'#E96228', marginTop:'30px'}}/>
                    <IoLogoCss3  style={{fontSize:"120px",color:'#146EB0', marginTop:'30px'}}/>
                    <FaJs        style={{fontSize:"120px",color:'#EFD81D', marginTop:'30px'}}/>
              </div>
              <div className='col-md-12 d-flex justify-content-around mt-5 flex-column flex-md-row' data-aos='zoom-in'>
                    <FaReact     style={{fontSize:"120px",color:'#7ADBF7',marginTop:'30px'}}/>
                    <FaNodeJs    style={{fontSize:"120px",color:'#7CB700',marginTop:'30px'}}/>
                    <SiMongodb   style={{fontSize:"120px",color:'#3F9330',marginTop:'30px'}}/>
              </div>
              <div className='col-md-12 d-flex justify-content-around mt-5 flex-column flex-md-row' data-aos='fade-right'>
                    <FaGithub    style={{fontSize:"120px",color:'#000000', marginTop:'30px'}}/>
                    <FaGitAlt    style={{fontSize:"120px",color:'#E84D31', marginTop:'30px'}}/>
                    <FaBootstrap style={{fontSize:"120px",color:'#8210F5', marginTop:'30px'}}/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skills
