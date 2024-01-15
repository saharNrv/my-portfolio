import React from 'react';

export default function HeaderSection({title,desc}) {
  return (
    <div>
       <h3 className='text-4xl text-cyan-500'>{title}</h3>
            <p className='text-gray-400 my-3 text-lg'>{desc}</p>
    </div>
  );
}
