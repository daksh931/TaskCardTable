import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='font-semibold mt-10 ml-16 space-x-6 flex'>
        

        <div>  <Link to='/' > DashBoard</Link> </div>
        <div>  <Link to='/user' >•  User</Link> </div>
        <div>  <Link to='/table' >•  List</Link> </div>
       

      </div>
    </div>
  )
}

export default Navbar
