import React from 'react';
import './Skills.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Skills() {

  const skills=[
    {logo:'fa-html5',count:86},
    {logo:'fa-css3',count:90},
    {logo:'fa-js',count:83},
    {logo:'fa-react',count:69},
  ]

  return (
    <section id='skills' className='bg-black md:pt-24 pt-10'>
      <div className="container-grid">
        <HeaderSection title={'My Skills'} desc={'My Knowledge'}/>
        <div className="row-grid">
          {
            skills.map(skill=>(

          <div className="col-12 col-xs-12 col-md-6 col-lg-3" key={skill.logo}>
          <div className='flex items-center justify-center '>
            <div className='relative min-w-[1-rem]  cursor-pointer flex flex-col items-center justify-center  p-10 rounded-xl '>
                <div
                style={{
                  background:`conic-gradient(#db2877 ${skill.count}%,#ddd ${skill.count}%)`
                }}
                 className=' w-32 h-32 flex items-center justify-center rounded-full text-white hover:shadow-3xl hover:scale-105 duration-700'>
                  <div className='w-28 h-28 bg-black rounded-full flex items-center justify-center text-6xl'>
                         <i class={`fa-brands ${skill.logo} `}></i>

                  </div>
                </div>
                <p className='text-white mt-4 text-xl'>{skill.count}%</p>
            </div>
            </div>
          </div>
            ))
          }
          
        </div>
      </div>
      
    </section>
  );
}
