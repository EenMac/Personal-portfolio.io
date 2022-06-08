import React from 'react'
import "../css/About.css"

function About() {
  return (
    <div id="about-container">
        <div id="story-section">
          <h1>This is where the story will go</h1>
        </div>
        <div id="interests-section">
          <h1>My Likes and interests</h1>
          <div>
            <ul id="sports">
              <h2>Sports</h2>
              <li>Rugby</li>
              <li>Cricket</li>
            </ul>
          </div>
          <div>
            <ul id="topics">
              <h2>Topics</h2>
              <li>Green tech</li>
              <li>Politics and governance structures</li>
              <li>Economics</li>
              <li>Habits and psychology</li>
            </ul>
          </div>
          <div id="Activities">
            <ul>
              <h2>Activities</h2>
              <li>Touch rugby</li>
              <li>Snowboarding</li>
              <li>Wakeboarding</li>
              <li>Mountain-climbing</li>
              <li>Gym</li>
              <li>Hiking</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About