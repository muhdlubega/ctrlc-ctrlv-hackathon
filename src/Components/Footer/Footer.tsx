import { Link } from 'react-router-dom'
import facebookicon from "../../Assets/image/facebook-icon.svg"
import twittericon from "../../Assets/image/twitter.svg"
import instaicon from "../../Assets/image/instagram.svg"

const Footer = () => {
  return (

      <div className='footer-main'>
        <div className='footer-left'>
          <h1>VISUAL GAMER</h1>
          <h3>Level up your gaming experience with Visual Gamer</h3>
        </div>
        <div className='footer-center'>
          <ul className='footer-list'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/genre'>Genres</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/account'>Account</Link></li>
          </ul>
        </div>
        <div className='footer-right'>
    <a href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"><img src={facebookicon} alt="Facebook Icon" /></a>
    <a href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"><img src={twittericon} alt="Twitter Icon" /></a>
    <a href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"><img src={instaicon} alt="Instagram Icon" /></a>
        </div> 
      </div>

  )
}

export default Footer