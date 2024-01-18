import React, { useEffect, useState } from 'react';

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
            <a href='#home' className='border-2 md:flex hidden text-pink-600 border-pink-600 flex items-center justify-center animate-bounce w-8 h-8 rounded-lg  right-4 bottom-4 fixed'>

            <i class="fa-solid fa-arrow-up"></i>  
        </a>
            
        ):('')
    
    
       
 
   
    
  );
}
