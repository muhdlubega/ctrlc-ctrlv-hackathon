import React from 'react'
import { Link } from "react-router-dom";
import AuthModal from '../Login/AuthModal';
import AuthDetails from '../Login/AuthDetails';

const Navbar = () => {
  return (
    <div className='nav'>
        <span><h2><Link to='/' >Home</Link></h2></span>
        <span><h2><Link to='/genres'>Genre</Link></h2></span>
        <span><h2><Link to='/about'>About</Link></h2></span>
        <span><h2><Link to='/account'>Account</Link></h2></span>
        <AuthModal/>
        <AuthDetails/>
        

</div>
  )
}

export default Navbar