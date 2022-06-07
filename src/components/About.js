import React from 'react'
import "../css/About.css"

function About() {
  return (
    <div id="about-container">
      <section id="story-section">
        <div>
          <h1>This is where the story will go</h1>
        </div>
      </section>
      <section id="interests-section">
        <div>
          <h1>My Likes and interests</h1>
          <div>
            <ul>
              <h2>Sports</h2>
              <li>Rugby</li>
              <li>Cricket</li>
              <li>Gymnastics</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Topics</h2>
              <li>Green tech</li>
              <li>Politics and governance structures</li>
              <li>Economics</li>
              <li>Habits and psychology</li>
            </ul>
          </div>
          <div>
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
      </section>
    </div>
  )
}

export default About