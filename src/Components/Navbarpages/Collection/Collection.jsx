import React from 'react'
import Collectiontop from './Collectiontop'
import "./Collection.css"
import Collectioncards from './Collectioncards'
import Footer from '../../Footer/Footer'

const Collection = () => {
  return (
    <div className='Collection'>
        <Collectiontop/>
        <Collectioncards/>
        <Footer/>
    </div>
  )
}

export default Collection