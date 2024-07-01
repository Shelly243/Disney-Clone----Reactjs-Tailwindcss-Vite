import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'

function App() {
  return (
    <div className="bg-black h-screen">
      <Header/>
      <Slider/>
    </div>
  )
}

export default App
