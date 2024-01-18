import React, { useEffect, useState } from 'react';
import './NavBar.css'

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
    <nav className={` navbar ${sticky ?'navbar-sticky':''}`}>
       <div className='navbar-wrapper '>
        {/* log */}
            <div className='mx-7 '>
              <h4 className='navbar-logo'>
                𝖘𝖆<span className='text-pink-600'>𝓱</span>𝖆𝖗

              </h4>
            </div>
           {/* links */}
            <div className={` navbar-links ${sticky ?'navbar-links-sticky ':' navbar-links-notSticy'} `}>
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
            <div className='menubar '
            onClick={()=>setOpenMenu(!openMenu)}
            >
            <i class="fa-solid fa-bars"></i>
            </div>
            {/* mobaile menu */}
            <div className={`mobaile-menu  ${openMenu?'mobaile-menu-open':'mobaile-menu-close'}`}>
              <ul className='mobaile-list'>
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
