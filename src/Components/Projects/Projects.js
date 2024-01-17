import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Projects.css'

// import required modules
import { Pagination } from 'swiper/modules';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Projects() {
  return (
    <section className='md:pt-24 pt-10'>
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
              <SwiperSlide className='bg-gray-900 p-8 border-2 border-pink-600 rounded-xl'>
                <img src="/img/car.png" alt="" className='w-20 h-20 rounded-full object-cover'/>
                <h3 className='text-pink-600 my-2 text-xl font-bold'>car shopping</h3>
                <p className='text-white leading-6 mb-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea perspiciatis,  </p>
                <a href="#">
                  <button className='bg-pink-600 text-white p-2 rounded-lg'>Go to project</button>
                </a>
              </SwiperSlide>
             
              <SwiperSlide className='bg-gray-900 p-8 border-2 border-pink-600 rounded-xl'>
                <img src="/img/car.png" alt="" className='w-20 h-20 rounded-full object-cover'/>
                <h3 className='text-pink-600 my-2 text-xl font-bold'>car shopping</h3>
                <p className='text-white leading-6 mb-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea perspiciatis,  </p>
                <a href="#">
                  <button className='bg-pink-600 text-white p-2 rounded-lg'>Go to project</button>
                </a>
              </SwiperSlide>
             
              <SwiperSlide className='bg-gray-900 p-8 border-2 border-pink-600 rounded-xl'>
                <img src="/img/car.png" alt="" className='w-20 h-20 rounded-full object-cover'/>
                <h3 className='text-pink-600 my-2 text-xl font-bold'>car shopping</h3>
                <p className='text-white leading-6 mb-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea perspiciatis,  </p>
                <a href="#">
                  <button className='bg-pink-600 text-white p-2 rounded-lg'>Go to project</button>
                </a>
              </SwiperSlide>
             

            </Swiper>
          </>
        </div>
      </div>


    </section>

  );
}
