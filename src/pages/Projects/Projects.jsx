import React from 'react';
import Card from '../card/Card';
import {cardData} from './data';


const Projects = () => {
  return (
    <>
          <div className='container-fluid' style={{marginTop:'100px'}}>
            <div className='row'>
                <h1 className='display-3 fw-bold text-center' data-aos='zoom-in'>Projects</h1>
                <div className='col-md-12 d-flex flex-column flex-md-row'>
                {
                  cardData.map((val,index)=>{
                    return(
                      <div className='col-md-4 p-4' data-aos='flip-left'>
                        <Card
                        img={val.img}
                        name={val.name}
                        category={val.category}
                        btn1={val.btn1}
                        btn2={val.btn2}
                        demolink={val.demolink}
                        codelink={val.codelink}
                        />
                        </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
    </>
  )
}

export default Projects
