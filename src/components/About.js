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
          <p>
            In my final year of university, my friend and I decided it was a great idea to create a website using wordpress. Fast forward several hours and red bulls later, we found ourselves frustrated with the inflexability of the template we had bought and its inability to look the way we wanted it to. Little did I know that this frustration would be the spark that lit my endless curiosity for all things digital.
            Later on that year I made a critical decision to diverge from the career path that I had chosen years before and a job at an established environmental firm I fought tooth and nail to secure, to venture into the unknown on nothing but a gut feeling and a sense of 
          </p>
        </div>
        <div id="interests-section">
          <h1>My Likes and interests</h1>
          <div id="interests-list">
            <div id="sports">
              <h2>Sports</h2>
              <ul id="flex-container"> 
                <div id="img-container">
                  <img src={rugby}></img>
                  <div>
                    <div id="text">Rugby</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={cricket}></img>
                  <div id='overlay'>
                    <div id="text">Cricket</div>
                  </div>
                </div>
              </ul>
            </div>

            <div id="activities">
              <h2>Activities</h2>
              <ul id="flex-container">
                <div id="img-container">
                  <img id="touch-rugby" src={touchrugby}></img>
                  <div>
                    <div id="text">Touch Rugby</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={snowboarding}></img>
                  <div>
                    <div id="text">Snowboarding</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={wakeboard}></img>
                  <div>
                    <div id="text">Wakeboarding</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={mountainclimb}></img>
                  <div>
                    <div id="text">Mountain Climbing</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={gym}></img>
                  <div>
                    <div id="text">Gym</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={hiking}></img>
                  <div>
                    <div id="text">Hiking</div>
                  </div>
                </div>
                <div id="img-container">
                  <img src={reading}></img>
                  <div>
                    <div id="text">Reading Books</div>
                  </div>
                </div>
              </ul>
            </div>

            <div id="topics">
              <h2>Topics</h2>
                <ul id="flex-container">
                  <div id="img-container">
                    <img src={greenTech}></img>
                    <div>
                      <div id="text">Green tech</div>
                    </div>
                  </div>
                  
                  <div id="img-container">
                    <img src={politics}></img>
                    <div>
                      <div id="text">Politics</div>
                    </div>
                  </div>
                  <div id="img-container">
                    <img src={economics}></img>
                    <div>
                      <div id="text">Economics</div>
                    </div>
                  </div>
                  <div id="img-container">
                    <img src={psychology}></img>
                    <div>
                      <div id="text">Psychology</div>
                    </div>
                  </div>
                </ul>
            </div>

            
          </div>
        </div> 
    </div>
  )
}

export default About