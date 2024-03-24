import { useState } from 'react'
import './App.css';
import  {MainBody,Sidebar,RightMenu,Footer}  from './Components';
// MainBody, RightMenu, Footer
import { Home } from './Pages';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Sidebar />
      <MainBody> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainBody>
      <RightMenu />
      {/* <Footer />  */}
    </BrowserRouter>
  )
}

export default App
