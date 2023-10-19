import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home} />
          </Routes>
        </BrowserRouter>
    </>
  )
}
