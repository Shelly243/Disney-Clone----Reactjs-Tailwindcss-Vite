import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'

function App() {
  return (
    <div className="h-screen">
      <Header/>
      <Slider/>
      <ProductionHouse/>
    </div>
  )
}

export default App
