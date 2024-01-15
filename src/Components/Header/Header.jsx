import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <div className='header min-h-screen pt-12  flex md:flex-row flex-col items-center' id='home'>
      <div className='flex-1 mx-4 flex items-center justify-center'>
        <img src="/img/girl.png" alt="" className=' w-[400px] h-[400px] rounded-[40px]  object-cover ' />
      </div>
      <div className='flex-1 mx-4 '>
        <div className='md:text-left text-center mx-4'>
          <h1 className='md:text-5xl text-2xl md:leading-normal font-bold text-white'>
            <span className='text-cyan-500 md:text-6xl text-5xl'>Hello!</span>
            <br />
            My Name is <span className='text-cyan-500'>Sahar Nourivand</span>
          </h1>
          <h4 className='text-gray-600 md:text-2xl text-lg my-4'>FrontEnd Developer</h4>
          <div className='flex justify-center md:justify-start gap-4 '>
            <a href="https://t.me/SaharNourivand" className='text-gray-600 hover:text-cyan-500 text-2xl'><i class="fa-brands fa-telegram"></i></a>
            <a href="instagram.com/saharNourivand" className='text-gray-600 hover:text-cyan-500 text-2xl'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/saharNrv" className='text-gray-600 hover:text-cyan-500 text-2xl'><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>

    </div>
  );
}
