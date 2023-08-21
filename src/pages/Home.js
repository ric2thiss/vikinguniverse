import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from './Services'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
    </div>
  )
}

export default Home