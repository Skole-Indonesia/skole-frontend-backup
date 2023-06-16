import React from 'react'
import Navbar from '../../../components/layout/Navbar'
import Hero from './Hero'
import Banner from './Banner'
import Product from './Product'
import Benefit from './Benefit'
import Cta from './Cta'
import Footer from '../../../components/layout/Footer'

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Hero />
      <Banner />
      <Product />
      <Benefit />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home