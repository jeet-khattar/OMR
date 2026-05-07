import React from 'react'
import './Hero.css'
import heroImg from '../Photos/new-nav-photo.webp'
import Herotext from './Herotext'
import Herobtn from './Herobtn'

const Herosec = () => {
  return (
    <div className='herosec'>
        <img src={heroImg} alt="" />
        <Herotext/>
        <Herobtn/>
    </div>
  )
}

export default Herosec