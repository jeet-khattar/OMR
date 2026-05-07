import React from 'react'
import Img1 from './Image/card-1-after.jpg'
import Img2 from './Image/card-1-before.webp'
import './Product.css'

const Product1left = () => {
  return (
    <div className='Product1left'>
        <img src={Img1} alt="" className='img1'/>
        <img src={Img2} alt="" className='img2'/>
    </div>
  )
}

export default Product1left