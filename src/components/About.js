import React from 'react'
import "../css/About.css"
import wakeboard from "../images/wakeboard.jpeg"
import rugby from "../images/rugby.jpg"
import cricket from "../images/cricket.jpeg"
import greenTech from "../images/greentech.jpg"
import politics from "../images/politics.jpg"
import economics from "../images/economics.jpg"
import psychology from "../images/psychology.png"
import touchrugby from "../images/touch-rl.jpg"
import snowboarding from "../images/Snowboarding.webp"
import mountainclimb from "../images/mountainclimbing.jpg"
import gym from "../images/gym.jpg"
import hiking from "../images/hiking.jpg"
import reading from "../images/reading.jpg"

function About() {
  return (
    <div id="about-container">
        <div id="story-section">
          <h1>This is where the story will go</h1>
        </div>
        <div id="interests-section">
          <h1>My Likes and interests</h1>
          <div id="interests-list">
            <div > 
              <h2>Sports</h2>
              <ul id="sports"> 
                <li>
                  <img src={rugby}></img>
                </li>
                <li>
                  <img src={cricket}></img>
                </li>
              </ul>
            </div>
            <div>
              <ul id="topics">
                <h2>Topics</h2>
                <li>
                  <img src={greenTech}></img>
                </li>
                <li>
                  <img src={politics}></img>
                </li>
                <li>
                  <img src={economics}></img>
                </li>
                <li>
                  <img src={psychology}></img>
                </li>
              </ul>
            </div>
            <div id="Activities">
              <ul>
                <h2>Activities</h2>
                <li>
                  <div id="divdiv">
                    <img id="touchies" src={touchrugby}></img>
                  </div>
                  
                </li>
                <li>
                  <img src={snowboarding}></img>
                </li>
                <li>
                  <img src={wakeboard}></img>
                </li>
                
                <li>
                  <img src={mountainclimb}></img>
                </li>
                <li>
                  <img src={gym}></img>
                </li>
                <li>
                  <img src={hiking}></img>
                </li>
                <li>
                  <img src={reading}></img>
                </li>
              </ul>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default About