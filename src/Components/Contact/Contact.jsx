import React from 'react';
import './Contact.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Contact() {



  return (
    <section className='h-full md:pt-40 pt-10' id='contact'>
      <div className="container-grid">
        <HeaderSection title={'Contact Me'} desc={'Get in touch'} />
        <div className="row-grid " id='contact-row'>
          <div className='col-12 col-xs-12 col-md-6 col-lg-6'>
            <form className=' md:py-2 md:px-8 p-2 flex flex-col gap-5'>
              <div className='input-wrrap relative'>
                <input type="text" placeholder='enter your name' className='w-full p-4 rounded-xl outline-none bg-inherit shadow-3xl shadow-pink-300 placeholder:text-gray-500  border-2 border-pink-600' />
              </div>

              <div className='input-wrrap relative'>
                <input type="email" placeholder='enter your email' className='w-full p-4 rounded-xl outline-none bg-inherit shadow-3xl shadow-pink-300 placeholder:text-gray-500 border-2 border-pink-600' />
              </div>

              <div className='input-wrrap'>
                <textarea placeholder='enter your message'
                  className='w-full border-2 border-pink-600 p-4 rounded-xl resize-none outline-none h-40 bg-inherit shadow-3xl shadow-pink-300 placeholder:text-gray-500 '></textarea>
              </div>
              <button className='bg-pink-600 p-2 rounded-xl md:w-[180px] text-white hover:bg-gradient-to-r
                       from-fuchsia-500 to-pink-500  duration-700'>Send Message</button>
            </form>
          </div>
          <div className="col-12 col-xs-12 col-md-6 col-lg-6">
            <div className='w-full flex flex-col gap-6 items-center justify-center'>
              <div className=' text-white w-full  p-4 flex  gap-4 items-center '>

                <a href="https://nourivandsahar@gmail.com" className='text-black flex gap-6 items-center justify-center'>
                  <span className='text-3xl text-pink-600'>
                    <i class="fa-solid fa-envelope"></i>

                  </span>
                  <p className='md:text-xl text-sm '>nourivandsahar@gmail.com</p>
                </a>



              </div>
             
              <div className=' text-white w-full  p-4 flex  gap-4 items-center '>

                <a href="https://t.me/SaharNourivand" className='text-black flex gap-6 items-center justify-center'>
                  <span className='text-3xl text-pink-600'>
                  <i class="fa-brands fa-telegram"></i>

                  </span>
                  <p className='md:text-xl text-sm '>@SaharNourivand</p>
                </a>



              </div>
             
              <div className=' text-white w-full  p-4 flex  gap-4 items-center '>

                <a href="https://whatsapp.com" className='text-black flex gap-6 items-center justify-center'>
                  <span className='text-3xl text-pink-600'>
                  <i className="fa-brands fa-whatsapp "></i>

                  </span>
                  <p className='md:text-xl text-sm '>+989147100462</p>
                </a>



              </div>
             

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
