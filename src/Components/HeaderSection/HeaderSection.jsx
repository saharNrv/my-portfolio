import React from 'react';

export default function HeaderSection({title,desc}) {
  return (
    <div className='text-center my-10'>
       <h3 className='text-4xl text-pink-600'>{title}</h3>
            <p className='text-gray-400 my-3 text-lg'>{desc}</p>
    </div>
  );
}
