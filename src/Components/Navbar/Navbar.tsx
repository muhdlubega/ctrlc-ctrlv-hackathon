import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
        <span><h2><Link to='/' >Home</Link></h2></span>
        <span><h2><Link to='/genre'>Genre</Link></h2></span>
        <span><h2><Link to='/about'>About</Link></h2></span>
        <span><h2><Link to='/account'>Account</Link></h2></span>
</div>
  )
}

export default Navbar