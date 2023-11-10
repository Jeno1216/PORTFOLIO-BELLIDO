import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Hero() {

    useEffect(() => {
        const video = document.getElementById('myVideo'); // located in App.jsx
      
        const playPromise = video.play();
      
        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              // Automatic playback started!
            })
            .catch(error => {
              // Auto-play was prevented
              // Show a UI element to let the user manually start playback
            });
        }
      
        video.oncanplay = () => {
          const elements = document.querySelectorAll('.element-tilt');
          VanillaTilt.init(elements, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
          });
        };
      }, []);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

      
  return (
    <>

    
    <div className=' d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5' >
    <div className='  d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5 px-lg-5 p-4 p-lg-0 ' style={{width: '100%'}}>
        <div className=' col-12 row d-flex '>
            
            <div className='col-lg-7 col-12  p-2 d-flex  justify-content-center flex-column'>
                <p className='mb-1 greeting' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200">Greetings! Delighted to introduce myself as</p>
                <p className='mb-1 name' style={{fontWeight: '800', fontSize: '75px', color: '#0277B5'}} data-aos="fade-right" data-aos-delay="400">Jeno Bellido</p>
                <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="600">Full-stack Developer from the Philippines. On a mission to craft apps that leave an indelible mark.  Let's build the web together! 🌐💻</p>
                <br />
                <div className='d-flex gap-4'>
                    <p className='logo m-0' style={{fontWeight: 'bold', fontSize: '25px', color: '#0277B5'}} data-aos="fade-up" data-aos-delay="800"> <i className='bi-github'></i> </p>
                    <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '25px', color: '#0277B5'}} data-aos="fade-up" data-aos-delay="1000"><i className='bi-facebook'></i> </p>
                    <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '25px', color: '#0277B5'}} data-aos="fade-up" data-aos-delay="1200"><i className='bi-linkedin'></i> </p>
                </div>
            </div>

            <div className='col-5 d-lg-flex d-none p-2' data-aos="zoom-in" data-aos-delay="1400">
                <div className='p-5 rounded-5' >
                    <img className='element-tilt' src="../public/hero-image.png" alt="" style={{width: '100%', height: 'auto'}} />
                </div>
            </div>

        </div>
    </div>
    </div>
    <br /><br /><br />

    </>
  )
}

export default Hero