import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
            case 'FETCH_ERROR':
            return {
                loading:false,
                error:'SOMETHING IS WRONG',
                post:{}
            
            }
            default:
                return state
    }
}

const DatafectchingViaUseReducer = () =>{

 const [state,dispatch] =useReducer(reducer,initialState);
 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>{
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
    })
    .catch((error)=>{
        dispatch({type:'FETCH_ERROR'})
    })
    
 })
  return (
    <div>
         {state.loading?'loading':state.post.title}
    </div>
  )
}

export default DatafectchingViaUseReducer
