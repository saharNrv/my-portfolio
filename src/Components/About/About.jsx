import React from 'react';
import './About.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function About() {

    const info=[
        {text:'Years Experience',count:"1"},
        {text:'Completed Projects',count:"4"},
        
    ]

  return (
    <section className='py-10 text-white' id='about'>
        <div className='text-center mt-8'>
           <HeaderSection title={'About Me'} desc={'My Introduction'}/>

            <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 items-center max-w-6xl mx-auto mt-8'>
                <div className=' flex-1 '>
                    <div className='text-gray-400 my-3'>
                        <p className='text-justify '> my name is Sahar, I live in Urmia I love coding and learning. My hobbies are reading books, going climbing and listening to music. </p>
                        <div className='flex my-10 items-center justify-start  gap-6  '>
                          {
                            info.map(item=>(
                                <div key={item.text} className='border rounded-3xl border-cyan-500 flex flex-col justify-center p-4 '>
                                <h3 className=' text-2xl text-white'>
                                    {item.count}
                                    </h3>
                                <span>{item.text}</span>
                            </div>
                            ))
                          }
                        </div>
                      <button className='flex justify-start items-center gap-3 bg-cyan-500 px-7 py-3 text-white rounded-3xl hover:bg-gradient-to-r
                       from-cyan-500 to-blue-500 hover:shadow-3xl duration-700'>
                        <a href="#" className='flex  items-center gap-3 ' download >Download <i class="fa-regular fa-file-lines text-xl"></i></a>
                        
                      </button>
                    </div>
                         

                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <div className='lg:w-96 h-full md:w-10/12 w-11/12'>
                        <img src="/img/about-image.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  );
}
