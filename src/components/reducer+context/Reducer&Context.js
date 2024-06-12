import React,{useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'


export const CountContext= React.createContext()

 const intialState=1;
 const reducerFunc =(state,action)=>{
  switch(action){
    case 'increment':
        return state+1
    case 'decrement':
        return state-1 ;
     case 'reset':
        return intialState;
        default:
            return state     
  }
 }


function ReducerContext() {
    const [count,dispatch]=useReducer(reducerFunc,intialState)
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div>
    <h2>For global state management we use useContext+usereducer together</h2>
    Count-----== {count}
    <ComponentA />
    <ComponentB />
    <ComponentC />
    </div>
    </CountContext.Provider>
  )
}

export default ReducerContext