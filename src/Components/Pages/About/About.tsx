import React from "react";
import FarhahPic from "../../../Assets/images/FarhahVG.png";
import BegaPic from "../../../Assets/images/BegaVG.png";
import PremPic from "../../../Assets/images/PremVG.png";
import IkmalPic from "../../../Assets/images/IkmalVG.png";
import YuvaPic from "../../../Assets/images/YuvaVG.png";
// import{ motion } from "../../Styles/main.scss";

function About() {
  return (
    <>
      <h2>Meet The Team</h2>
      <br />
    <div className="bio-main">
      <div className="bio-wrapper">
        <div className="bio-container">
          <div className="bio">
            <img src={FarhahPic} />

            <div className="detail">
              <h2>Farhah Nizam</h2>
              <p className="position">CEO & Founder</p>
              <p>If I was funny, I would have a good 'about' bio</p>
              <button className="button-contacts"> Contact</button>
            </div>
          </div>
        </div>
      </div>
        <div className="bio-container">
          <div className="bio">
            <img src={BegaPic} />

            <div className="detail">
              <h2>Lubega</h2>
              <p className="position">Art Director</p>
              <p>Good stuff</p>
              <button className="button-contacts">Contact</button>
            </div>
          </div>
        </div>
      </div>

        <div className="bio-container">
          <div className="bio">
            <img src={PremPic} className="img"/>

            <div className="detail">
              <h2>Prem</h2>
              <p className="position">Art Director</p>
              <p>Optimus Prem.</p>
              <button className="button-contacts">Contact</button>
            </div>
          </div>
        </div>

        <div className="bio-container">
          <div className="bio">
            <img src={IkmalPic} />

            <div className="detail">
              <h2>Ikmal</h2>
              <p className="position">Art Director</p>
              <p>I'm sleepy</p>
              <button className="button-contacts">Contact</button>
            </div>
          </div>
        </div>
      

        <div className="bio-container">
          <div className="bio">
            <img src={YuvaPic} />

            <div className="detail">
              <h2>Yuva</h2>
              <p className="position">Art Director</p>
              <p>I'm shy</p>
              <button className="button-contacts">Contact</button>
            </div>
          </div>
        </div>
    


      <h2>About Us</h2>

      <div className="detail">
        <p>
          We are a team of passionate designers and developers who love creating
          beautiful and functional video game websites. Our mission is to be the
          very best like no one ever was.
        </p>
        <br />

        <h2>Build on RAWG API</h2>
        <p>
          Build on the ultimate gameplay resource, the RAWG API! It has over
          350,000 games for 50 platforms and is the largest open video game
          database. Explore rich information like tags, genres, and more. Get
          links to digital distribution platforms, player activity data, and
          similar games based on visual similarity. RAWG continually grows
          thanks to user contributions and algorithms, making it the perfect
          tool for game developers and enthusiasts
        </p>
        <br />

        <h2>Terms of Use</h2>
        <p>
          Free use of RAWG data or pictures! Send us recognition and include a
          link. Startups and hobby projects can also use it professionally if
          they have fewer than 100k users or 500k page views. Don't try to
          imitate us, though. Do you need assistance? Contact us at api@rawg.io
        </p>
      </div>
  </>
  );
}

export default About;