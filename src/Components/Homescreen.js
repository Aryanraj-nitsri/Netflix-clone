import React from 'react'
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import Requests from './Request';

 function Homescreen() {
  return (
    <div className="Homescreen_container">
        <Nav/>
        <Banner/>
        <Row title="Netflix Originals" Islarge fetchurl={Requests.fetchNetflixOriginal}/>
        <Row title="Trendings"  fetchurl={Requests.fetchTrending}/>
        <Row title="Comedy Movies"  fetchurl={Requests.fetchComedyMovies}/>
        <Row title="Horror Movie"  fetchurl={Requests.fetchHorrorMovies}/>
        <Row title="Top Rated"  fetchurl={Requests.fetchTopRated}/>
        <Row title="Documentries"  fetchurl={Requests.fetchDocumentries}/>
        
    </div>
  )
}
export default Homescreen;
