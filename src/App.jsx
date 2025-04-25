import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Sucursales from './components/sucursales'
import Productos from './components/productos'
import Novedades from './components/Novedades'
import NuevasAperturas from './components/nuevasaperturas'
import NuevasLineas from './components/NuevasLinea'
import NuevoEstilo from './components/NuevoEstilo'
import RegalaBakery from './components/RegalaBakery'
import Celiacos from './components/Celiacos'
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/nuevas-aperturas" element={<NuevasAperturas />} />
        <Route path="/nueva-linea" element={<NuevasLineas />} />
        <Route path="/nuevo-estilo" element={<NuevoEstilo />} />
        <Route path="/regala-box" element={<RegalaBakery />} />
        <Route path="/celiacos" element={<Celiacos />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
