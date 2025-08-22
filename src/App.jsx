import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './WebPage/HomePage'
import About from './WebPage/About'
import Navbar from './WebPage/Navbar'
import Footer from './WebPage/Footer'
import Contact from './WebPage/Contact'
import Course from './WebPage/Course'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses/:id' element={<Course/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App