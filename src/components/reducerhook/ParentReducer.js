import React,{useReducer} from 'react'
import ReducerTwo from './ReducerTwo';
import Datafetching from './Datafetching';
import DatafectchingViaUseReducer from './DatafectchingViaUseReducer';

/* 
useReducer(reducerFun,initialvalue);
reducerFun(state,action)
 */

const initialValue=0;
const reducerFun= (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialValue    
        default:
            return state

    }
}
const ParentReducer=()=> {
    const [count, dispatch]=useReducer(reducerFun,initialValue)
  return (
    <div>
        {/* <h2>Second method to apply reducer</h2>
<ReducerTwo/> */}
        <h3>UseReducer Hooks </h3>
        <p>UseReducer is a hook that is used for state management
            is a alternative of useState, useState is built using 
            useReducer
        </p>

       <div>Count is ----{count}</div>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>


<h2> data fetching using useEffect </h2>
<Datafetching />
<h2>data fetching using  useReducer</h2>
<DatafectchingViaUseReducer />
    </div>
  )
}


export default ParentReducer