import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Sucursales from './components/sucursales'
import Productos from './components/productos'
import Novedades from './components/Novedades'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/novedades" element={<Novedades />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
