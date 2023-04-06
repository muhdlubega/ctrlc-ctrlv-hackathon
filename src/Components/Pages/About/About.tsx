import React from 'react';
import FarhahPic from '../../../Assets/images/FarhahVG.png';
import BegaPic from '../../../Assets/images/BegaVG.png';
import PremPic from '../../../Assets/images/PremVG.png';
import IkmalPic from '../../../Assets/images/IkmalVG.png';
import YuvaPic from '../../../Assets/images/YuvaVG.png';

function About() {

  return (
    <>
      <h2>Meet The Team</h2>
      <br />

      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap'
      }}>

      <div style={{
        flex: '33.3%',
        marginBottom: '16px',
        padding: '0 8px'
      }}>

      <div style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
      }}>

      <img src={FarhahPic} style={{ width: '100%' }} />
      <div style={{ padding: '0 16px' }}>
        <h2>Farhah Nizam</h2>
          <p style={{ color: 'grey' }}>CEO & Founder</p>
          <p>If I was funny, I would have a good 'about' bio</p>
          <p>farhah@besquare.com.my</p>
          <button style={{
            border: 'none',
            outline: '0',
            display: 'inline-block',
            padding: '8px',
            color: 'white',
            backgroundColor: '#000',
            textAlign: 'center',
            cursor: 'pointer',
            width: '100%' 
      }}> Contact</button>
      </div>
      </div>
      </div>
      </div>

      <div style={{
        flex: '33.3%',
        marginBottom: '16px',
        padding: '0 8px' }}>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
      <img src={BegaPic} style={{ width: '100%' }} />
      <div style={{ padding: '0 16px' }}>
      <h2>Lubega</h2>
        <p style={{ color: 'grey' }}>Art Director</p>
        <p>Good stuff</p>
        <p>example@example.com</p>
      <button style={{
        border: 'none',
        outline: '0',
        display: 'inline-block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%'
      }}>Contact</button>
      </div>
      </div>
      </div>

      <div style={{
        flex: '33.3%',
        marginBottom: '16px',
        padding: '0 8px' }}>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
      <img src={PremPic} style={{ width: '100%' }} />
      <div style={{ padding: '0 16px' }}>
      <h2>Prem</h2>
        <p style={{ color: 'grey' }}>Art Director</p>
        <p>Optimus Prem.</p>
        <p>example@example.com</p>
      <button style={{
        border: 'none',
        outline: '0',
        display: 'inline-block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%'
      }}>Contact</button>
      </div>
      </div>
      </div>

      <div style={{
        flex: '33.3%',
        marginBottom: '16px',
        padding: '0 8px' }}>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
      <img src={IkmalPic} style={{ width: '100%' }} />
      <div style={{ padding: '0 16px' }}>
      <h2>Ikmal</h2>
        <p style={{ color: 'grey' }}>Art Director</p>
        <p>I'm sleepy</p>
        <p>example@example.com</p>
      <button style={{
        border: 'none',
        outline: '0',
        display: 'inline-block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%'
      }}>Contact</button>
      </div>
      </div>
      </div>

      <div style={{
        flex: '33.3%',
        marginBottom: '16px',
        padding: '0 8px'
      }}>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
      <img src={YuvaPic} style={{ width: '100%' }} />
      <div style={{ padding: '0 16px' }}>
        <h2>Yuva</h2>
          <p style={{ color: 'grey' }}>Art Director</p>
          <p>I'm shy</p>
          <p>example@example.com</p>
        <button style={{
        border: 'none',
        outline: '0',
        display: 'inline-block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%' }}>Contact</button>
      </div>
      </div>
      </div>

      <h2>About Us</h2>

      <div style={{ padding: '0 16px' }}>
        <p>We are a team of passionate designers
          and developers who love creating beautiful
          and functional video game websites.
          Our mission is to be the very best like no one ever was.</p>
      <br />

      <h2>Build on RAWG API</h2>
        <p>Build on the ultimate gameplay resource, the RAWG API! It has over 350,000
          games for 50 platforms and is the largest open video game database.
          Explore rich information like tags, genres, and more.
          Get links to digital distribution platforms,
          player activity data, and similar games based on visual similarity.
          RAWG continually grows thanks to user contributions and algorithms,
          making it the perfect tool for game developers and enthusiasts</p>
      <br />

      <h2>Terms of Use</h2>
        <p>Free use of RAWG data or pictures!
          Send us recognition and include a link.
          Startups and hobby projects can also use it professionally if they have fewer than 100k users or 500k page views.
          Don't try to imitate us, though.
          Do you need assistance? Contact us at api@rawg.io</p>
      </div>
      </>
    )}
    
  export default About;