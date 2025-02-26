import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {


  const resumeDownloadHandle=()=>{
    window.location.href="https://drive.google.com/uc?export=download&id=1FuEXPDxoXw588k4aSkHX8S35uDMqx7zD"
}
  return (
    <>
    <div className='container'>
        <div className='row'>
          
                <nav className='navbar navbar-expand-lg bg-light py-2 fixed-top'>
                <div className='col-md-12'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav m-auto d-flex justify-content-center'>
                        <li className='nav-item mx-4'><Link smooth={true} duration={1000}style={{cursor:'pointer'}} to='home'  className='nav-link fw-bold text-dark'>Home</Link></li>
                        <li className='nav-item mx-4'><Link smooth={true} duration={1000}style={{cursor:'pointer'}} to='about' className='nav-link fw-bold text-dark'>About</Link></li>
                        <li className='nav-item mx-4'><Link smooth={true} duration={1000}style={{cursor:'pointer'}} to='projects' className='nav-link fw-bold text-dark'>Projects</Link></li>
                        <li className='nav-item mx-4'><Link smooth={true} duration={1000}style={{cursor:'pointer'}} to='skills' className='nav-link fw-bold text-dark'>Skills</Link></li>
                        <li className='nav-item mx-4'><Link smooth={true} duration={1000}style={{cursor:'pointer'}} to='contact' className='nav-link fw-bold text-dark'>Contact</Link></li>
                        <li className='nav-item mx-4'><button onClick={resumeDownloadHandle} className='btn btn-warning fw-bold text-light px-4'>Resume</button></li>
                    </ul>
                </div>
                </div>

                </nav>
            </div>
        </div>
    
    </>
  )
}

export default Navbar




