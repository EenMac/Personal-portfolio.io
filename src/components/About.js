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
          <div id="text-container">
            <p>
            Originally, I was born and raised in Johannesburg, South Africa, where I attended the university of the Witwatersrand and attained my bachelors in 2017. During my final year I had secured myself an environmental internship and was well on my way to establishing myself as a member the environmental community. It was also during my final year where a friend and I decided it was a great idea to create a website using WordPress, as a personal project. 
            </p>
            <p>
              During this long and somewhat tedious process, one thing that became apparent was my frustration over the inherent lack of control I had throughout the creation process. I struggled to get the website elements to go exactly where I wanted them to go. Little did I know was that it was in this period of frustration that my curiosity for software development was sparked.
            </p>
            <p>
              Instead of following the path I had laid for myself over the previous 4 years, I set myself onto a new and unexplored trail, the likes of which I had no idea where I would land. That is when I moved across to the United Kingdom.
            </p>
            <p>
            It was during this time whilst working various jobs, I found myself dabbling in the fundamentals of code whenever I had a moment spare. It was only a time when the pandemic hit, whilst on furlough, I managed to find the time and momentum to really zone in on my abilities as a developer. Under the guidance of some of my nearest friends and colleagues, and with the momentum in my favour I was led to the software development course with CodeClan, which further cemented my understanding and put me on path towards where I am now. I would genuinely consider software development my passion, and I could not be happier of where I turned out.
            </p>
            <p>
            If you are reading this, please feel free to get in touch. 
            </p>
          </div>
          
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