import React from 'react'
import { Link } from "react-router-dom";
import AuthModal from '../Login/AuthModal';
import AuthDetails from '../Login/AuthDetails';

const Navbar = () => {
  return (
    <div className='nav'>
        <h2><Link to='/' >Home</Link></h2>
        <h2><Link to='/genres#genreidsec'>Genre</Link></h2>
        <h2><Link to='/about'>About</Link></h2>
        <h2><Link to='/account'>Account</Link></h2>
        <AuthModal/>
        <AuthDetails/>
        

</div>
  )
}

export default Navbar