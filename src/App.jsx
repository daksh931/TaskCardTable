import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Cards from './components/Cards'
import Users from './components/Users'
import TableComponent from './components/TableComponent'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/user" element={<Users />} />
      <Route path="/table" element={<TableComponent />} />
    </Routes>
   </>
  )
}

export default App
