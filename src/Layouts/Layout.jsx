import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../FronendComponents/Footer'
import Navbar from '../FronendComponents/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
