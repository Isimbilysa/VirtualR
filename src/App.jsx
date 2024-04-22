import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import Workflow  from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-18 px-6">
      <HeroSection/>
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
