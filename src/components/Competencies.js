import React from 'react'
import "../css/Competencies.css"

function Competencies() {
  return (
    <div id="competencies-container">
      <section id="languages-section">
        <h1>Core languages</h1>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>Java</li>
          </ul>
        <h2>Applicable tools, frameworks and metholdologies</h2>
          <ul>
            <li>React</li>
            <li>Scrum/Agile</li>
            <li>Springboot</li>
            <li>Cypress</li>
            <li>Selenium</li>
            <li>Linux</li>
            <li>Node.js</li>
          </ul>
      </section>
      <section id="projects-section">
        <h1>Projects</h1>
        <ul>
          <li>Notflix</li>
          <li>Productivity Timer</li>
          <li>Personal website</li>
          <li>Radroutes</li>
          <li>Carbon Calculator</li>
        </ul>
      </section>
      <section id="experiences-section">
        <h1>Personal experience</h1>
          <div>
            <h1>Bluebox Aviation</h1>
            <h2>My responsibilities</h2>
              <ul>
                <li>Decouple the Automated test suite from browserstack, and integrate the use of safari-driver and chromedriver into the suite which resulted in a more meticulpous end to end process experience</li>
                <li>Organise and lead the bi-monthly scrum events, i.e the  Sprint planning, review and retrospective, as well as facilitating any cross-team communication that may restrict reaching of sprint goal</li>
                <li>Assisting Senior developer and team leads in reaching their sprint goal by assisting with any spare tasks that they are unable to complete in time, such as html and css changes, or adding minor features.</li>
              </ul>
          </div>
      </section>
    </div>
  )
}

export default Competencies