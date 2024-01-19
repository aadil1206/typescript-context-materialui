import './App.css';
import Login from './Components/Login/Login';

import Page from './Components/page/page';
import { Routes, Route } from "react-router-dom";
import Logincontext from './Components/context/logincontext';
import {useContext} from "react";

function App() {
  const {open} =useContext(Logincontext)

  return (
    <>
      {open ? (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
        
        <Route path="/page" element={<Page />} />
        </Routes>
      )}
    </>
  );
}

export default App;