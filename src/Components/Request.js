const API_KEY="54170b5fb62434f94fd256a62903e095"
const Requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&languages=en-Us`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomamceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=1079`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default Requests;