import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Logo = () => {
  return (
    <div className='logo'>
        <Link to='/'><h1>E-COM</h1></Link>
    </div>
  )
}

export default Logo