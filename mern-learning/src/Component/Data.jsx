import React, { useState } from 'react'
import data from './Data.json'

const Data = () => {
    const [nData, setnData] = useState(data);
    const remove=(itemId)=>{
        setnData(nData.filter(item=>item.id !== itemId))
    }
    const Update=(itemId)=>{
        setnData(nData.map(items=>{
            if(items.id === itemId){
                return{name:"NewName"}
            }else{
                return items;
            }
        }))

    }
    return (
        <div>
            <ul>
                {
                    nData.map(ele => 
                        <li key={ele.id}>
                            {ele.name}
                            <button onClick={()=>Update(ele.id)}>Update</button>
                            <button onClick={()=>remove(ele.id)}>Remove</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={()=>setnData([])}>Clear</button>
        </div>
    )
}

export default Data