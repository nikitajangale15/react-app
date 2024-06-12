import React,{useState,useMemo} from 'react'

const  ParentMemo = () => {
    const [counterOne,setCounterOne]= useState(0);
    const [counterTwo,setCounterTwo] = useState(1);

     const incrementOne =() =>{
        setCounterOne(counterOne+1);
     }
     function incrementTwo(){
        setCounterTwo(counterTwo*5);
     }

////////////without usememo it will effect whole componnet speed bcoz of while loop , slow down the speed
const isEven = ()=>{
         let i=0;
        // while(i<200000000) i++
        while(i<20) i++

    return counterOne % 2 === 0;
}


//////here using usememo to memoised the is even value with dependecy counter one
//      const isEven = useMemo(() => {
//         let i=0;
//         while(i<2000000) i++
//         return counterOne % 2 === 0;
//  },[counterOne]);
//  console.log("iseven",isEven)

  return (
    <div>
      <h2>useMemo testing code</h2>
      <button onClick={incrementOne}> Count One -{counterOne} </button>
      <span>{isEven() ? "Even" : "odd"}</span><br></br>

      <button onClick={incrementTwo} >Count Two -{counterTwo} </button>


    </div>
  )
}


export default ParentMemo
