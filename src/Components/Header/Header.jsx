import React, { useEffect } from 'react';
import './Header.css'

export default function Header() {




  return (
    <section className='header' id='home'>
    <div className="container-grid">
      <div className="row-grid">
        <div className="col-12 col-xs-12 col-lg-6" >
        <div className='header-cover'>
        <img src="/img/hero-image.png" alt="my image" className='header-img ' />
      </div>
        </div>
        <div className="col-12 col-xs-12 col-lg-6" data-aos="fade-left">
        <div className='header-infos ' >
        <div className='lg:text-left text-center '>
          <h1 className='header-title'>
            <span className='text-black md:text-5xl text-4xl '>Hello, it's me</span>
            <br />
            My Name is <span className='text-pink-600 '>Sahar Nourivand</span>
          </h1>
          <h4 className='header-subtitle'>FrontEnd Developer</h4>
          <div className='header-socials'>
            <a href="https://t.me/SaharNourivand" className='header-social'><i class="fa-brands fa-telegram"></i></a>
            <a href="instagram.com/saharNourivand" className='header-social'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/saharNrv" className='header-social'><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
        </div>
      </div>

    </div>
    </section>
  );
}
