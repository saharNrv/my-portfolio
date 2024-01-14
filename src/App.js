import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
    </div>
  );
}
