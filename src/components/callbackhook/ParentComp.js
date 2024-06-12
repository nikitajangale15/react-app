import React,{useCallback, useState} from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

export default function ParentComp() {
   const [age,setAge]=useState(25);
   const [salary,setSalary]=useState(13000);

   ////////without using callback hook , it will re-render the other child cmponents
   function increaseAge(){
    console.log("age is increased")

    setAge(age+1);
   }

   function increaseSalary(){
    console.log("salary is incereased")

    setSalary(salary+1000)
   }

/////with the use of call back hook to increase the performance of react app
//  const increaseAge= useCallback(()=>{
//     console.log("age is increased")
//     setAge(age+1)
//  },[age])

//  const increaseSalary= useCallback(()=>{
//     console.log("salary is incereased")
//     setSalary(salary+1000)
//  },[salary])

  return (
    <div>
<Title/>
<Count text="age" count={age} />
<Button handleClick={increaseAge}>Increment my age</Button>
 <Count text="salary" count={salary} />
<Button handleClick={increaseSalary}>Increment my salary</Button>
 </div>
  )
}
