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
              <div className='col-md-12 d-flex justify-content-around mt-5'data-aos='fade-left'>
                    <FaHtml5     style={{fontSize:"120px",color:'#E96228'}}/>
                    <IoLogoCss3  style={{fontSize:"120px",color:'#146EB0'}}/>
                    <FaJs        style={{fontSize:"120px",color:'#EFD81D'}}/>
              </div>
              <div className='col-md-12 d-flex justify-content-around mt-5' data-aos='zoom-in'>
                    <FaReact     style={{fontSize:"120px",color:'#7ADBF7'}}/>
                    <FaNodeJs    style={{fontSize:"120px",color:'#7CB700'}}/>
                    <SiMongodb   style={{fontSize:"120px",color:'#3F9330'}}/>
              </div>
              <div className='col-md-12 d-flex justify-content-around mt-5' data-aos='fade-right'>
                    <FaGithub    style={{fontSize:"120px",color:'#000000'}}/>
                    <FaGitAlt    style={{fontSize:"120px",color:'#E84D31'}}/>
                    <FaBootstrap style={{fontSize:"120px",color:'#8210F5'}}/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skills
