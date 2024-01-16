import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>

    </div>
  );
}
