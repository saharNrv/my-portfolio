import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css'
import { Pagination } from 'swiper/modules';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Projects() {

  const projects=[
   { link:'#',name:'Coffee Shopping',img:'/img/coffee.avif',des:'The coffee shopping site is made of html,css,js and for the data used json-server'},
   { link:'https://sahar-buysweet.netlify.app/',name:'Buy Sweets',img:'/img/candy.webp',des:'The cms sweets site is made of html,css,js and for the data used json-server'},
   { link:'#',name:'Dashboard',img:'/img/dashboard.png',des:'The dashboard is made react and node.js '},
   { link:'#',name:'Car Shopping',img:'/img/car.png',des:'The car site is made react '},
  ]

  return (
    <section className='h-full md:pt-40 pt-10' id='projects'>
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
                  <SwiperSlide className='bg-[#dadada] p-8 border-2 border-pink-600 rounded-xl'>
                  <img src={project.img} alt="" className='w-20 h-20 rounded-full object-cover'/>
                  <h3 className='text-pink-600 my-2 text-xl font-bold'>{project.name}</h3>
                  <p className='text-gray-500 leading-6 mb-5 text-sm'>{project.des}</p>
                  <a href={project.link}>
                    <button className='bg-pink-600 text-white p-2 rounded-lg hover:bg-gradient-to-r
                       from-fuchsia-500 to-pink-500  duration-700'>Go to project</button>
                  </a>
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