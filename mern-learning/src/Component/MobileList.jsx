import React from 'react'
import './MobileList.css'


function MobileList(props) {
    const {image,title,price}=props;
  return (
    <div className='main'>
      <img className='img' src={image} alt="" />
      <div className="disc">
      <h2>{title}</h2>
      <p>{price}</p>
      <button>Add To Cart</button>
      </div>
      
    </div>
  )
}

export default MobileList
