import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import AuthModal from '../Login/AuthModal'

const Navbar = () => {
  const handleShift = () => {
    window.scrollTo({
      top:1200,
      behavior: 'smooth'
    });
  }
  return (
    <div className='nav'>
        <h2><Link to='/' onClick={handleShift}>Home</Link></h2>
        <h2><Link to='/genres' onClick={handleShift}>Genres</Link></h2>
        <h2><Link to='/about' onClick={handleShift}>About</Link></h2>
        <h2><Link to='/account' onClick={handleShift}>Account</Link></h2>
        <AuthModal/>
        

</div>
  )
}

export default Navbar
