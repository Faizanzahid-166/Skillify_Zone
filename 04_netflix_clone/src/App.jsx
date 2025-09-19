import React from 'react'
import './App.css'
import {Navbar, Footer} from './components/index.js';
import Home from './pages/Home.jsx';

function App() {


  return (
    <>
      <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
    </>
  )
}

export default App
