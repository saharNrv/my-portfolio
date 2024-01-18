import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css'
import { Pagination } from 'swiper/modules';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Projects() {

  const projects=[
   { link:'#',name:'Coffee Shopping',img:'/img/coffee.avif',text:'The coffee shopping site is made of html,css,js and for the data used json-server'},
   { link:'https://sahar-buysweet.netlify.app/',name:'Buy Sweets',img:'/img/candy.webp',text:'The cms sweets site is made of html,css,js and for the data used json-server'},
   { link:'#',name:'Dashboard',img:'/img/dashboard.png',text:'The dashboard is made react and node.js '},
   { link:'#',name:'Car Shopping',img:'/img/car.png',text:'The car site is made react '},
  ]

  return (
    <section className='section' id='projects'>
      <div className="container-grid">
        <HeaderSection title={'My Projects'} desc={'Web Sites'} />
        <div className='mt-10 lg:px-48'>


          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >

              {
                projects.map(project=>(
                  <SwiperSlide >
                    <div className='project-wrapper'>

                  <img src={project.img} alt="project img" className='project-img'/>
                  <h3 className='project-name'>{project.name}</h3>
                  <p className= 'project-text'>{project.text}</p>
                  <a href={project.link}>
                    <button className='project-btn'>Go to project</button>
                  </a>
                    </div>
                </SwiperSlide>
                ))
                }
             

            </Swiper>
          </>
        </div>
      </div>


    </section>

  );
}
