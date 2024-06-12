import React,{useCallback, useState} from 'react'
import Button from './Button';

function NewText() {
    const[age,setAge]=useState(0);
    const[salary,setSalary]=useState(1000);

  let increaseAge =useCallback(()=>{
      setAge(age+2);
  },[age])

  let increaseSal =useCallback(()=>{
   setSalary(salary+500) 
  },[salary])

  return (
    <div>
        <Button handleAge={increaseAge}>Increment AGe</Button>
        <Button handleSal={increaseSal}>Increment salary</Button>

    </div>
  )
}

export default NewText