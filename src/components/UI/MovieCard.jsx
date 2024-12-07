import React from 'react'
import "./MovieCard.css"
import { NavLink } from 'react-router-dom';

const MovieCard = ({data}) => {

    const {Poster, Title, Type, Year, imdbID} = data;

  return (
    <>
      <img className='poster' src={Poster} alt={Title+ " poster"} />
      <p className='movie-name'>{Title}</p>
      <NavLink to={`/movies/${imdbID}`} className="movie-a-btn">
      <button className='watch-btn'>Details</button>
      </NavLink>
    </>
  )
}

export default MovieCard
