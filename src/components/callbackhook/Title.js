import React from 'react'

const Title=() =>{
    console.log("Title rendering")
  return (
    <div>
     <h2>Use callback hook</h2>
    </div>
  )
}

export default React.memo(Title)