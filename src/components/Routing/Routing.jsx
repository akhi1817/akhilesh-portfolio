import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contact from '../../pages/Connect/Contact';
import Projects from '../../pages/Projects/Projects';
import Skills from '../../pages/Skills/Skills';
import Navbar from '../Navbar/Navbar';
import { Element } from "react-scroll";
import ScrollToTopButton from '../ScrollTop/ScrolltoTop';




const Routing = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTopButton/>
    <Element name="home" className="section"><Home/></Element>
    <Element name="about" className="section"><About/></Element>
    <Element name="skills" className="section"><Skills/></Element>
    <Element name="projects" className="section"><Projects/></Element>
    <Element name="contact" className="section"><Contact/></Element>
    
    </>
  )
}

export default Routing
