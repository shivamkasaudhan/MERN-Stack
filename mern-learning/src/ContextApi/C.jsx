import React, { useContext } from 'react'
import { GreetContext} from './A'
// import { GreetContext } from './A'



export default function C() {
    const useCon = useContext(GreetContext);
    // const useCon2 = useContext(GreetContext2);
    // console.log(props)
  return (
    <h1>Greet: {useCon.greet} {useCon.greet2}</h1> 
    
  )
}

{/* <GreetContext.Consumer>
        {
            (val)=>{
                return (
                    <GreetContext2.Consumer>
                        {
                            (val2)=>{
                                return <h1>Greet: {val2},{val}</h1>
                            }
                        }
                    </GreetContext2.Consumer>
                )

            }
        }
    </GreetContext.Consumer> */}
