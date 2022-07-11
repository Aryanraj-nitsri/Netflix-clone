import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './Localaxios'


export default function Row({title,Islarge,fetchurl}) {
    const [movie,setmovie]=useState([])
    useEffect(()=>{
const Getmovies=async()=>{
    const movieData=await axios.get(fetchurl)
    setmovie(movieData.data.results)
}
Getmovies()
    },[fetchurl])
  return (
    <div className="row_container">
        <div className="row_content">
            
        <h1>{title}</h1>
        <div className="row_image">
{ movie && movie.map((item,index)=>{
  return  <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="error"  className={`Row_cross ${Islarge && "large_icon"} `} key={index}/>

})}
            
            
        </div>
        </div>
    </div>
  )
}
