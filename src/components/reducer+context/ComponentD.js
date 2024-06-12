import React,{useContext} from 'react'
import { CountContext } from './Reducer&Context'

function ComponentD() {
    const valContext=useContext(CountContext)
    return (
      <div>
        Component D
          <button onClick={()=>valContext.countDispatch('increment')}>Increment</button>
          <button onClick={()=>valContext.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>valContext.countDispatch('reset')}>Reset</button>
          
         
      </div>
  )
}

export default ComponentD