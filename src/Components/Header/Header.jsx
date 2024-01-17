import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <div className='header min-h-screen pt-20 flex items-center justify-center' id='home'>
    <div className="container-grid">
      <div className="row-grid">
        <div className="col-12 col-xs-12 col-lg-6">
        <div className='  flex items-center justify-center w-full'>
        <img src="/img/hero-image.png" alt="" className='header-img  w-3/4 object-cover ' />
      </div>
        </div>
        <div className="col-12 col-xs-12 col-lg-6">
        <div className=' w-full h-full flex items-center lg:justify-start justify-center'>
        <div className='lg:text-left text-center '>
          <h1 className='md:text-4xl text-2xl md:leading-normal font-bold mt-4 text-black'>
            <span className='text-black md:text-5xl text-4xl '>Hello, it's me</span>
            <br />
            My Name is <span className='text-pink-600 '>Sahar Nourivand</span>
          </h1>
          <h4 className='text-gray-400 md:text-2xl text-lg my-4'>FrontEnd Developer</h4>
          <div className='flex justify-center lg:justify-start gap-4 '>
            <a href="https://t.me/SaharNourivand" className='text-gray-400 hover:text-pink-600 text-2xl'><i class="fa-brands fa-telegram"></i></a>
            <a href="instagram.com/saharNourivand" className='text-gray-400 hover:text-pink-600 text-2xl'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/saharNrv" className='text-gray-400 hover:text-pink-600 text-2xl'><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
        </div>
      </div>

   
      

    </div>
    </div>
  );
}
