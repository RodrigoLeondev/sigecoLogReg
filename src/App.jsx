import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import FormLogin from "./Components/Login";
import RegisterAdmin from './Components/RegisterAdmin';
import RegisterTenant from './Components/RegisterTenant';


function App() {
  return(
    <>
      <Routes>
          <Route path='login' element={<FormLogin/>} />
          <Route path='admin' element={<RegisterAdmin/>} />
          <Route path='user' element={<RegisterTenant/>} />  
      </Routes>
    </>



  )

}

export default App;
