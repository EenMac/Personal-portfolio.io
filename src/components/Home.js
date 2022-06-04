import React from 'react'
import "../css/Home.css"
import sunset from "../African-Sunset.jpeg";

function Home() {
    return (
        <div id="home-container">
            <section id="header-section">
                <h1>This will be the header component</h1>
                <image src="../African-Sunset.jpeg"/>
            </section>
            <section id="content-section">
                <h1>This will be the content section</h1>
            </section>
            <section id="footer-section">
                <h1>This will be the footer section</h1>
            </section>
        </div>
    )
}

export default Home