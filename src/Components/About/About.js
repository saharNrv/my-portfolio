import React from 'react';
import './About.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function About() {

  const info = [
    { text: 'Years Experience', count: "1" },
    { text: 'Completed Projects', count: "4" },

  ]

  return (
    <section className='py-10 text-white' id='about'>
      <div className="container-grid">
        <div className='text-center mt-8'>
          <HeaderSection title={'About Me'} desc={'My Introduction'} />
        </div>
        <div className="row-grid " id='row-revers' >
          <div className="col-12 col-xs-12 col-md6 col-lg-6">
            <div className=' h-full flex items-center px-10 pt-10 '>
              <div className='text-gray-400 my-3'>
                <p className='text-justify '> My name is Sahar, I live in Urmia, I have a bachelor's degree in computer engineering, and I love coding.
                  I am eager to contribute, learn and collaborate on projects, aiming to combine technical expertise with creative thinking to create impactful and forward-looking solutions. My hobbies are reading, hiking and listening to music. </p>

                <button className='flex  justify-center items-center gap-3 bg-pink-600 px-7 py-3 text-white rounded-3xl hover:bg-gradient-to-r
                       from-fuchsia-500 to-pink-500 hover:shadow-3xl duration-700 mt-10  md:w-40 w-full   '>
                  <a href="#" className='flex  items-center gap-3 ' download >Download <i class="fa-regular fa-file-lines text-xl"></i></a>

                </button>
              </div>


            </div>
          </div>
          <div className="col-12 col-xs-12 col-md6 col-lg-6">
            <div className=' flex justify-center items-center'>
              <div className='flex items-center justify-center w-2/4 relative '>
                <img src="/img/about-image.png" alt="" className='w-full rounded-full p-2   object-cover ' />
                <span className='circle'></span>

              </div>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}
