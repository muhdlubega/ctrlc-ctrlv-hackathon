import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
    <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/genre'>Genre</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/account'>Account</Link></li>
    </ul>
</div>
  )
}

export default Navbar