import React from 'react';

const Contact = () => {
  return (
    <>
    <div className='container bg-light' style={{marginTop:'100px'}}>
      <div className='row'>
        <div className='col-md-6'>
          <h1 data-aos='flip-right'>Contact Us</h1>
          <form className='mt-3' action="mailto:akhilkumbhar1718@gmail.com" method="post" encType="text/plain">
            <div className='col-md-12 d-flex'>
              <div data-aos='fade-right' className="col-md-6 mt-3">
                <label htmlFor="name" className="form-label fw-bold">First Name:</label>
                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" required/>
              </div>
              <div data-aos='fade-left' className=" col-md-6 mt-3 ms-3">
                <label htmlFor="name" className="form-label fw-bold">Last Name:</label>
                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" required/>
              </div>
            </div>
              <div data-aos='fade-right' className="mt-3">
                <label htmlFor="email" className="form-label fw-bold">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="your-email@example.com" required/>
              </div>
              <div data-aos='fade-right' className="mt-3">
                <label htmlFor="message" className="form-label fw-bold">Message:</label>
                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div className='mt-3 text-center'>
              <button type="submit" className="btn btn-primary px-5">Contact</button>
              </div>
            
          </form>
        </div>
        <div className='col-md-6 p-5 mt-3' data-aos='fade-right'>
          <img src='assets/contact.jpg' style={{width:'420px', height:'420px'}} className='img-fluid shadow-normal rounded-circle'/>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Contact;
