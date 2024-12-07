import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import MovieCard from '../components/UI/MovieCard';
import "./Movie.css"
import Loader from '../components/UI/Loader';

const Movies = () => {

  const moviesData = useLoaderData();

  const navigation = useNavigate();

  if (navigation.state === "loading" || !moviesData) {
    return <Loader />
  }

  return (
    <div className='movies-container'>
      <ul className='movie-container'>
        {moviesData &&
          moviesData.Search.map((currMovie) => {
            return <li key={currMovie.imdbID} className='movie-card-container'>
              <MovieCard data={currMovie} />
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Movies
