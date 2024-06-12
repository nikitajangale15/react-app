import React,{useReducer} from 'react'

/* 
useReducer(reducerFun,initialvalue);
reducerFun(state,action)
 */

const initialValue={
    firstValue:0
};
const reducerFun= (state,action) => {
    switch(action.type){
        case 'increment':
            return {firstValue:state.firstValue + action.value}
        case 'decrement':
            return {firstValue:state.firstValue - action.value}
        case 'reset':
            return initialValue    
        default:
            return state

    }
}
const ReducerTwo=()=> {
    const [count, dispatch]=useReducer(reducerFun,initialValue)
  return (
    <div>

       <div>Count is ----{count}</div>
        <button onClick={()=> dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=> dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=> dispatch({type:'increment',value:5})}>Increment 5</button>
        <button onClick={()=> dispatch({type:'decrement',value:5})}>Decrement 5</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>





    </div>
  )
}


export default ReducerTwo