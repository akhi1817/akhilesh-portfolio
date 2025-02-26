import React, { useEffect } from 'react'
import Routing from './components/Routing/Routing';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

const App = () => {

  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
      easing:'ease-in-out'
    },[])
  })
  return (
   <>
   <Routing/>
   </>
  )
}

export default App
