import React from 'react'
import './Perfume.css'
import PerfumeTop from './PerfumeTop'
import PerfumeCards from './PerfumeCards'
import Footer from '../../Footer/Footer'

const PerfumeOil = () => {
  return (
    <div className="PerfumeOil">
    <PerfumeTop/>
    <PerfumeCards/>
    <Footer/>
  </div>
  )
}

export default PerfumeOil