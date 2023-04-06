// // import React from 'react'

// // const About = () => {
// //   return (
// //     <div>About</div>
// //   )
// // }

// // export default About


// function About() {
//   const teamMembers = [
//     {
//       name: "Farhah",
//       position: "CEO",
//       profilePicture: "",
//       // profilePicture: "/john-smith.jpg",
//     },
//     {
//       name: "Lubega",
//       position: "",
//       profilePicture: "",
//     },
//     {
//       name: "Prem",
//       position: "",
//       profilePicture: "",
//     },
//     {
//       name: "Ikmal",
//       position: "",
//       profilePicture: "",
//     },
//     {
//       name: "Yuva",
//       position: "",
//       profilePicture: "",
//     },
//   ];

//   return (
//     <div>
//       <About teamMembers={teamMembers} />
//     </div>
//   );
// }

// export default About;

import React from 'react';

function About() {

  return (
    <>
      <h2>Responsive "Meet The Team" Section</h2>
      <p>Resize the browser window to see the effect.</p>
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

      <img src="/w3images/team1.jpg" alt="Farhah" style={{ width: '100%' }} />
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
      <img src="/w3images/team2.jpg" alt="Lubega" style={{ width: '100%' }} />
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
      <img src="/w3images/team2.jpg" alt="Prem" style={{ width: '100%' }} />
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
      <img src="/w3images/team2.jpg" alt="Ikmal" style={{ width: '100%' }} />
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
      <img src="/w3images/team2.jpg" alt="Yuva" style={{ width: '100%' }} />
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
      </>
    )}
    
  export default About;