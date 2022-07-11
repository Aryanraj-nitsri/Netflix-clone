import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './Localaxios'
import Requests from './Request'


export default function Banner() {
  const[movies,setmovies]=useState([])
  useEffect(()=>{
    const Getdata=async()=>{
const data=await axios.get(Requests.fetchNetflixOriginal)

setmovies(data.data.results[Math.floor(Math.random()*data.data.results.length-1)])
}
Getdata()
},[])

  return (
      <div className="Banner_container">
        <div className="banner_image">
     {movies.backdrop_path &&  <img src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt="Network error" />}

        </div>
        <div className="Banner_content">
           {movies && <h1>{movies.name}</h1>}
            <div className="banner_buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            {movies.overview && <p>{movies.overview}</p>}
        </div>
    </div>
  )
}
