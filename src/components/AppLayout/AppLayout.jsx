import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import "./AppLayout.css"

const AppLayout = () => {

  return (
    <div className='appLayoutContainer'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout
