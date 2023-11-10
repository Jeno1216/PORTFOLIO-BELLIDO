import React, { useEffect } from 'react'
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Skills() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <>
        <div className=' d-flex justify-content-center align-items-center' >
            <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>

                <div className='w-100  px-lg-5 p-4 p-lg-0'>
                    <p className='mb-1 name' style={{fontWeight: '800', fontSize: '75px', color: '#0277B5'}} data-aos="fade-right">Skills</p>
                    <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Skills learned throughout the years. Let's build the web together! 🌐💻</p>
                </div>

                <div className='d-flex col-12 justify-content-start p-lg-4 p-4 ' >

                <div className='col-lg-12 p-3 row d-lg-flex d-flex pb-5 '>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="react.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> React</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="200">
                        <img src="js.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> JavaScript</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="400">
                        <img src="node.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> NodeJS</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="600">
                        <img src="bootstrap.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Bootstrap</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="700">
                        <img src="fastapi.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> FastAPI</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="800">
                        <img src="mongodb.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> MongoDB</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1000">
                        <img src="mysql.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> MySQL</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1200">
                        <img src="github.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Github</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1400">
                        <img src="flask.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Flask</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1600">
                        <img src="python.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Python</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1700">
                        <img src="c++.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> C++</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="1800">
                        <img src="openai.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> OpenAI</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="2000">
                        <img src="css.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> CSS</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="2200">
                        <img src="html.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> HTML</p>
                    </div>

                    <div className='col-lg-2 col-md-2 col-3 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-delay="2400">
                        <img src="ai.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc text-center' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> AI Algorithms</p>
                    </div>










                    
                </div>
                </div>

                
            </div>
        </div>
        <br /><br /><br />
        </>
      )
    }

export default Skills