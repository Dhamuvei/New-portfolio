import React from 'react'
import Header from "./Components/Header/Header"
import Nav from './Components/Nav/Nav';
import About from "./Components/About/About";
import Contact from './Components/Contact/contact';
import Experience from './Components/Experience/Experience';
import Service from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App