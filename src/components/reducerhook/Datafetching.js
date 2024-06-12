import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function Datafetching() {
   /////using useEffect

   const [loading,setLoading]=useState(true);
   const [error,setError] =useState('');
   const [post,setPost] =useState({});

   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/todos/1')
       .then((response)=>{
        setLoading(false)
        setError('')
        setPost(response.data)
        console.log("data",response.data.title)
       })
       .catch((err)=>{
        setLoading(false)
        setError(err)
       })
   },[])

  return (
    <div>
        Title is-----{post.title}
    </div>
  )
}
