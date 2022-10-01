import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Homescreen from './Components/Homescreen';
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signIn, usersignOut } from "./features/Userslice";
import db from './Components/Firebase';


function App() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user.user)
  useEffect(()=>{

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        dispatch(
          signIn({
            email: user.email,
          }))
        }
      else {
       dispatch(usersignOut())
      }
    });
  },[])

  
  return (
    <div className="app_conatainer">
{user?(<Homescreen/>):(<Header/>)}
      
    </div>
    );
}

export default App;
