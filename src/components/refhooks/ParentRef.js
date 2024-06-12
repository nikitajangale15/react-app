import React, { useEffect, useRef, useState } from 'react'

const ParentRef = () => {

  const inpuptRef = useRef(null)
  //////component did mount implies here
  useEffect(() => {
    inpuptRef.current.focus();
    console.log("inputRef", inpuptRef.current)

    ///////update the document title dynamically on a button click
    // console.log(document.title)
    // document.title=`React ${count}`
  })

  ////storing and accessing mutable values
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const incrementwithRef = () => {
    countRef.current = countRef.current +1;
  }

  const incremetwithState = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>useRef is often used for accessing and interacting with the DOM, managing focus, and storing mutable values without causing re-renders.</p>
      <input type="text" ref={inpuptRef} />
      <button>Send</button>


      <h5>storing and accessing mutable value</h5>
      <p>Count (state): {count}</p>
      <p>Count (ref): {countRef.current}</p>
      <button onClick={incremetwithState}>Increment with state</button>
      <button onClick={incrementwithRef}  >Increment with useRef</button>
    </div>
  )
}

export default ParentRef
