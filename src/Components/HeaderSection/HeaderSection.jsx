import React from 'react';
import './HeaderSection.css'

export default function HeaderSection({title,desc}) {
  return (
    <div className='section-header'>
       <h3 className='section-title'>{title}</h3>
            <p className='section-subtitle'>{desc}</p>
    </div>
  );
}
