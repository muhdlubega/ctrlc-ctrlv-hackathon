import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fadeStart = 500; // Start fading out 100 pixels from the top
const fadeEnd = 1000; // Completely faded out at 500 pixels from the top

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let opacity = 1;
  
  if (scrollTop > fadeStart) {
    opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
  }
  
  if (opacity >= 0 && opacity <= 1) {
    const headerElement = document.querySelector('.header-div') as HTMLElement;
    if (headerElement) {
      headerElement.style.opacity = opacity.toString();
    }
  }
};

window.addEventListener('scroll', handleScroll);

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span className='header-div'>
      <div className='header-content'>
      <h1 className='header-title' onClick={()=>{navigate("/")}}>VISUAL GAMER</h1>
      <h3 className='header-text'>Level up your gaming experience with Visual Gamer</h3>
      </div>
      <div className="scroll-down-container">
      <span>Scroll down to continue</span>
      <div className="arrow-down"></div>
</div>
      </span>
    </div>
  )
}


export default Header