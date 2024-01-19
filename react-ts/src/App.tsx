import './App.css';
import Login from './Components/Login/Login';

import Page from './Components/page/page';
import { Routes, Route } from "react-router-dom";
import Logincontext from './Components/context/logincontext';
import {useContext} from "react";

function App() {
  const {open} =useContext(Logincontext)
{console.log(open)}
  return (
    <>
      {open ? (
       
         <Routes>
        
         <Route path="/page" element={<Page />} />
         </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;