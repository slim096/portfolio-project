import React from 'react'
import Socials from './Socials'
import './home.css'
import HomePage from './HomePage'

const Home = () => {
  return (
    <section className="home site" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Socials />

                <div className="img"></div>
                
                <HomePage />
            </div>
        </div>
    </section>
  )
}

export default Home