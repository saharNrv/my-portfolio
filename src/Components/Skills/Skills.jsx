import React from 'react';
import './Skills.css'
import HeaderSection from '../HeaderSection/HeaderSection';

export default function Skills() {

  const skills=[
    {logo:'fa-html5',degree:'html',count:'86'},
    {logo:'fa-css3',degree:'css',count:'90'},
    {logo:'fa-js',degree:'js',count:'80'},
    {logo:'fa-react',degree:'react',count:'68'},
  ]

  return (
    <section id='skills' className='section' >
      <div className="container-grid">
        <HeaderSection title={'My Skills'} desc={'My Knowledge'}/>
        <div className="row-grid">
          {
            skills.map(skill=>(

          <div className="col-12 col-xs-12 col-md-6 col-lg-3" key={skill.logo} data-aos="fade-up"
          >
          <div className='skills-wrapper'>
            <div className='skills-items '>
                <div
                
                 className={`skills-degree ${skill.degree}`}>
                  <div className='skills-logos'>
                         <i class={`fa-brands ${skill.logo} `}></i>

                  </div>
                </div>
                <p className='skills-count'>{skill.count}%</p>
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
