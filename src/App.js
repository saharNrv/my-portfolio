import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import ScrollUp from './Components/ScrollUp/ScrollUp';


export default function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    
    <div >
      <ScrollUp/>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
