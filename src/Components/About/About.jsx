import React from 'react';
import './About.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function About() {

 

  return (
    <section className='section' id='about'>
      <div className="container-grid">
        
          <HeaderSection title={'About Me'} desc={'My Introduction'} />
      
        <div className="row-grid " id='row-revers' >
          <div className="col-12 col-xs-12 col-md6 col-lg-6" data-aos="fade-up-right" >
            <div className='about-info '>
              <div className='text-gray-500 my-3'>
                <p className='text-justify '> My name is Sahar, I live in Urmia, I have a bachelor's degree in computer engineering, and I love coding.
                  I am eager to contribute, learn and collaborate on projects, aiming to combine technical expertise with creative thinking to create impactful and forward-looking solutions. </p>

                <button className='about-btn '>
                  <a href="/portfolio/src/resume/resume (3).pdf" className='flex items-center gap-3 ' download >Download CV <i class="fa-regular fa-file-lines text-xl"></i></a>

                </button>
              </div>


            </div>
          </div>
          <div className="col-12 col-xs-12 col-md6 col-lg-6">
            <div className=' flex justify-center items-center'>
              <div className='flex items-center justify-center w-2/4 relative '>
                <img src="/img/about-image.png" alt="about image" className='about-img ' />
                

                <span className='circle'></span>
                

              </div>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}
