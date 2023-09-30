import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Allpages/Footer'
import { Allpages } from '../Allpages/Allpages'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Allpages/>
    <Routes>
        <Route path='sociocurry.in' element={<Allpages/>} ></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Routing