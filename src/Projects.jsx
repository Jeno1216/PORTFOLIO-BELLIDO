import React, { useEffect } from 'react'
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Projects() {
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
                <p className='mb-1 name' style={{fontWeight: '800', fontSize: '75px', color: '#0277B5'}} data-aos="fade-right" >My Projects</p>
                <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> Explore my works throughout my career. Let's build the web together! 🌐💻</p>
            </div>
            <div className='d-flex col-12 row justify-content-start p-lg-4 p-4' >

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                        <div className='position-relative' data-aos="fade-up">
                        <img className='rounded-3' src="project-1.png" alt="" style={{width: '100%', height: 'auto'}} />
                        <button className='border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '0', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square'></i> Visit SafetyPin </button>                            
                        </div>
                    <div className='' data-aos="fade-up" data-aos-delay="400">
                        <p className='mt-3 title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}} >SafetyPin</p>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Integration of Dijkstra's algorithm to recommend safe routes, and KDE algorithm to analyze crime patterns within Iloilo City.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-2-2.mp4" type="video/mp4" />
                    </video>
                    <button className='border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '0', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square'></i> Visit ICH </button>                            
                    </div>
                    <div className=' py-2' data-aos="fade-up" data-aos-delay="400">
                        <p className=' title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>Iloilo Coffee House</p>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> A full-stack website that allows customers review/rate their favorite products from Iloilo Coffee House.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> MongoDB, Express, React, Node.js, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-3-2.mp4" type="video/mp4" />
                    </video>
                    <button className='border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '0', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square'></i> Visit Swiftify </button>                            
                    </div>
                    <div className=' py-2' data-aos="fade-up" data-aos-delay="400">
                    <p className=' title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>Swiftify</p>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Utilization of Spotify API to display user's top Taylor Swift tracks. </p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> Flask , Javascript, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-4.mp4" type="video/mp4" />
                    </video>
                    <button className='border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '0', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square'></i> Visit Swiftify </button>                            
                    </div>
                    <div className=' py-2' data-aos="fade-up" data-aos-delay="400">
                    <p className=' title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>WVSU - USA</p>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> A static website to boost vitual presence of student council candidates. </p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> Flask , Javascript, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>



            </div>
        </div>
    </div>
    </>
  )
}

export default Projects