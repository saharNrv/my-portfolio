import React, { useEffect, useState } from 'react';
// import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  const[sticky,setSticky]=useState(false)
  const[openMenu,setOpenMenu]=useState(false)
  const menuLinks=[
    {name:'HOME',link:'#home'},
    {name:'ABOUT',link:'#about'},
    {name:'SKILLS',link:'#skills'},
    {name:'PROJECTS',link:'#projects'},
    {name:'CONTACT',link:'#contact'},
  ]

  useEffect(()=>{

    window.addEventListener('scroll',()=>{

      window.scrollY>0?setSticky(true):setSticky(false)
    })

  },[])


  return (
    <nav className={`navbar  fixed w-full top-0 left-0 z-[999] ${sticky ?'bg-gray-500/20 backdrop-blur-md border-b-2 border-pink-600 text-gray-900':'text-gray-400'}`}>
       <div className=' flex items-center justify-between'>
        {/* log */}
            <div className='mx-7 '>
              <h4 className='text-3xl  font-bold text-black'>
                𝖘𝖆<span className='text-pink-600'>𝓱</span>𝖆𝖗

              </h4>
            </div>
           {/* links */}
            <div className={`${sticky ?'md:bg-white/0 text-black ':'bg-white shadow shadow-pink-600'} text-gray-900 md:block hidden px-7 py-4 font-medium  rounded-bl-full`}>
              <ul className='flex items-center gap-1 '>
                {
                  menuLinks.map((item,index)=>(

                    <li key={index} className='px-6 hover:text-pink-600'>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* menubar */}
            <div className='text-4xl z-[999] md:hidden px-7 py-3 text-black cursor-pointer'
            onClick={()=>setOpenMenu(!openMenu)}
            >
            <i class="fa-solid fa-bars"></i>
            </div>
            {/* mobaile menu */}
            <div className={`md:hidden text-white absolute h-screen w-2/3 top-0 duration-500 ease-in-out ${openMenu?'left-0':'left-[-100%]'}`}>
              <ul className='bg-gray-500 h-full flex flex-col pt-7 gap-10 py-2'>
                {menuLinks.map((item,index)=>(
                  <li key={index} className='px-6'>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

         </div>
      
    </nav>
  );
}
