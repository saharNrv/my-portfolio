import React from 'react';
import './About.css'

export default function About() {
  return (
    <section className='py-10 text-white' id='about'>
        <div className='text-center mt-8'>
            <h3 className='text-4xl'>About <span className='text-cyan-600'>Me</span></h3>
            <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
            <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 items-center max-w-6xl mx-auto'>
                <div>
                    <div className='text-gray-400 my-3'>
                        <p> my name is Sahar, I live in Urmia I love coding and learning. My hobbies are reading books, going climbing and listening to music. </p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      
    </section>
  );
}
