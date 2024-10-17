import React from 'react'
import './Projects.css'

import Pulse from 'react-reveal/Pulse';
import port from '../../images/port.png'

const Projects = () => {
  return (
    <>
        <div className='container project' id='project'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> recent Projects</h2>
            <hr/>
            <p  className='pb-3 text-center'> An innovative collection of diverse projects showcasing creativity, expertise, and a commitment to excellence.</p>
            <div className='row' id='ads'>
            <Pulse>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Frontend</span>
                            <img src={port} alt='project1'></img>
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                           
                          
                            <span className='card-detail-badge'>React</span>
                            
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Portfolio Website</h5>
                            </div>
                            <a className='ad-btn' href='https://kirti-vish.github.io/my-portfolio-app/'>View</a>
                        </div>
                    </div>
                </div>
                
                
                </Pulse>

            </div>
        </div>

    </>
  )
}

export default Projects
