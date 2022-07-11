import React, { useState } from 'react'
import './Nav.css'
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";


 function Nav() {
    useEffect(()=>{
        window.addEventListener('scroll',checkScroller );
        return ()=>{
            window.removeEventListener('scroll',checkScroller)
        }
    },[])

    const[show ,setshow]=useState(false)
    const checkScroller=()=>{
        if(window.scrollY>100){
            setshow(true)
        }
        else{
            setshow(false)
        }
    }
    
    const clickHandler=()=>{
        const auth = getAuth();
signOut(auth).then(() => {
    console.log("signOut")
}).catch((error) => {
    alert(error.Message)
});
}

  return (
<div className={`nav_container ${show? "nav_black":""}`}>

    <div className="Nav_images">
        <img src="../../logo.svg" alt="Network error"className='logo' />
        <img src="../../logo2.png" alt="Network error"className='logo2'  onClick={clickHandler}/>
    </div>
</div>
  )
}
export default Nav;
