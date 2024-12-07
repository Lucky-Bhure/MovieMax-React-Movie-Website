import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <main className='home-main-container'>
      <section className='home-container'>
        <div className='home-intro'>
          <h1>About Us</h1>
          <h3>EXPLORE THE LATEST IN MOVIE INDUSTRIES</h3>
          <h1>Unlimited Movie, TVs Shows, & More.</h1>
          <p>Discover the Top Best Movies and Dramas with a catchy subtitle like Your Ultimate Guide to Must-Watch Content.</p>
          <NavLink to={"/movies"}>
            <button className='explore-btn'>Explore Now</button></NavLink>
        </div>
        <div className='image-container'>
          <img src="./movies.png" alt="MovieMaximg" />
        </div>
      </section>
    </main>
  )
}

export default About
