import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'

export default function App() {
  return (
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/pricing' Component={Pricing} />
            <Route path='/blog' Component={Blog} />
            <Route path='/single' Component={SingleBlog} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}
