import React from 'react'

const Card = (props) => {


    const demoHandle=()=>{
        if(props.demolink){
                 window.open(props.demolink,"_blank","noopener,noreferrer")
        }
}
    const codehandle=()=>{
        if(props.codelink){
        window.open(props.codelink,"_blank","noopener,noreferrer");
        }
    }

  return (
    <>
    <div className='card mt-3 m-3'>
    <div className='card-body'>
        <img src={props.img} alt='furniture' className='img-fluid'/>
    </div>
    <div className='card-footer text-center'>
        <h4>{props.name}</h4>
        <h5>{props.category}</h5>
        <div className='text-center'>
        <button className='btn btn-primary mx-2 px-4' onClick={demoHandle}>{props.btn1}</button>
        <button className='btn btn-primary mx-2 px-4' onClick={codehandle}>{props.btn2}</button>
        </div>
       
    </div>
    </div>
    
    
    </>
  )
}

export default Card
