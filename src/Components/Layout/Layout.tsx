import React from 'react'
import Navbar from '../Navbar/Navbar'

export const Layout = ({children}) => {
  return (
    <div className="layout">
            <Navbar />
            {children}
        </div>
  )
}

export default Layout;
