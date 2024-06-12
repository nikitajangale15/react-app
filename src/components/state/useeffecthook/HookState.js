import React,{useState} from 'react'

export default function HookState() {
  //////hide and show button 
 const [show,setShow]=useState(true)

 /////toggle button

  return (
    <div>
    

      {show? <h2> Show the data</h2>: <h2>Hide the data</h2>}
  {/* <button onClick={()=>setShow(false)}>Hide btn</button>
  <button onClick={()=>setShow(true)}>Show btn</button> */}
  
  <button  onClick={()=>setShow(!show)}>Toggle</button>
      
    </div>
  )
}
