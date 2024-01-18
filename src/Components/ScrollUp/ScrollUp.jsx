import React, { useEffect, useState } from 'react';
import './ScrollUp.css'

export default function ScrollUp() {

    const[isShowBtnUp,setIsShowBtnUp]=useState(false)

    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                setIsShowBtnUp(true)
            }else if(window.scrollY<500){
                setIsShowBtnUp(false)
            }
        })

    },[])


  return (

    
        (isShowBtnUp)?(
            <a href='#home' className='scroll-btn-up '>

            <i class="fa-solid fa-arrow-up"></i>  
        </a>
            
        ):('')
    
    
       
 
   
    
  );
}
