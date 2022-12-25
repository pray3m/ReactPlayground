import React, {useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './assets/search.svg';
import MovieCard from './MovieCard';

// api key : 6c5b2dac
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6c5b2dac';

const movie1= {
    "Title": "3 Idiots",
    "Year": "2009",
    "imdbID": "tt1187043",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] =useState('');
  

  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    setMovies(data.Search);
    console.log(data);
  }

  useEffect( ()=> {
    searchMovies(searchTerm);
  },[] );

   return (
    <div className='app'>
      <h1>MoviesJoy</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }/>

        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm) }/>
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            { movies.map( (movie)=> (
              <MovieCard movie1={movie} />
            ) ) }
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies found.</h2>
          </div>
        )
      }


    </div>
  )
}

export default App