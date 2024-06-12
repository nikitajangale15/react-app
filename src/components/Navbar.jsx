import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div  className="nav">
     
        <Link className="link" to="/">State Hook</Link>
        <Link className="link" to="/parentcomp">UseCallback hook</Link>
        <Link className="link" to="/parentmemo">UseMemo hook</Link>
        <Link className="link" to="/parentreducer">UseReducer hook</Link>
        <Link className="link" to="/parentref">UseRef hook</Link>
        <Link className="link" to="/usercontext">UseContext hook</Link>
        <Link className="link" to="/reducercontext">useContext+useReducer</Link>

  

    </div>
  )
}
