import React,{useContext} from 'react'
import { CountContext } from './Reducer&Context'


function ComponentB() {
    const valContext=useContext(CountContext)
    return (
      <div>
        Component B
          <button onClick={()=>valContext.countDispatch('increment')}>Increment</button>
          <button onClick={()=>valContext.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>valContext.countDispatch('reset')}>Reset</button>
          
         
      </div>
    )
}

export default ComponentB