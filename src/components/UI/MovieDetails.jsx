import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import "./MovieDetails.css"

const MovieDetails = () => {

  const movieDetail = useLoaderData();
  const { Title, Poster, Plot, Genre, Director, Actors, Runtime, Released, Year, Writer, imdbRating, imdbVotes } = movieDetail;

  return (
    <div className='movie-detail-main-container'>
      <NavLink to={"/movies"}>Go Back</NavLink>
      <div className='movie-details'>
        <div className='movie-poster'>
          <img src={Poster} alt={Title} className='poster-image' />
        </div>
        <div className='movie-details-container'>
          <h1>{Title}</h1>
          <p><b>Plot: </b>{Plot}</p>
          <p><b>Genre: </b>{Genre}</p>
          <p><b>Director: </b>{Director}</p>
          <p><b>Actors: </b>{Actors}</p>
          <p><b>Runtime: </b>{Runtime}</p>
          <p><b>Released Date: </b>{Released}</p>
          <p><b>Year: </b>{Year}</p>
          <p><b>Writer: </b>{Writer}</p>
          <p><b>IMDB Rating: </b>{imdbRating}/10</p>
          <p><b>IMDB Votes: </b>{imdbVotes}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails