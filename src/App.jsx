import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './FronendComponents/About'
import Contact from './FronendComponents/Contact'
import Home from './FronendComponents/Home'
import Layout from './Layouts/Layout'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
    
  
}

export default App
