import React from 'react'
import product2img1 from './Image2/card-2-after.webp'
import product2img2 from './Image2/card-2-before.webp'
import './Product2.css'

const Product2left = () => {
  return (
    <div className='product2left'>
        <img src={product2img1} className='img1' alt="" />
        <img src={product2img2} className='img2' alt="" />
    </div>
  )
}

export default Product2left