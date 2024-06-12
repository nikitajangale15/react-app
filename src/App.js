import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HookState from './components/state/useeffecthook/HookState';
import Navbar from './components/Navbar';
// import HookUseEffect from './components/HookUseEffect';
import ParentComp from './components/callbackhook/ParentComp';
import ParentMemo from './components/memohook/ParentMemo';
import ParentReducer from './components/reducerhook/ParentReducer';
import ParentRef from './components/refhooks/ParentRef';
import ComponentA from './components/contexthook/ComponentA';
import ReducerContext from './components/reducer+context/Reducer&Context';




export const userContext= React.createContext()


function App() {
  return (
    <div className="App">
     <h2>Hello from React Learning</h2> 
    <img src={logo} className="App-logo" alt="logo" />
    <userContext.Provider value="jyoti">
    <Navbar/>
    <Routes>
      <Route  path="/" element={<HookState />}/>
      
      <Route  path="/parentcomp" element={<ParentComp />}/>
      <Route  path="/parentmemo" element={<ParentMemo />}/>
      <Route  path="/parentreducer" element={<ParentReducer />}/>
      <Route  path="/parentref" element={<ParentRef />}/>
      <Route  path="/usercontext" element={<ComponentA/>}/>
      <Route  path="/reducercontext" element={<ReducerContext/>}/>
    </Routes>
    </userContext.Provider>
    </div>
  );
}

export default App;
