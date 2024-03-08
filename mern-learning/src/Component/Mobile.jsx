import React from 'react'
import MobileList from './MobileList'
import list from '../list.json';

function Mobile() {
    
  return (
    <div>
        {list.map((ele)=>{
            return <MobileList 
            image={ele.image} 
            title={ele.title} 
            price={ele.price}
            />
       
        })}
    </div>
  )
}

export default Mobile
