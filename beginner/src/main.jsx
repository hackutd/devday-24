import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Join from './components/Join'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <Testimonials></Testimonials>
    <Join></Join>
  </React.StrictMode>,
)
