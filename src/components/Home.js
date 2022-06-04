import React from 'react'
import "../css/Home.css"
import sunset from "../African-Sunset.jpeg";

function Home() {

    var image = document.getElementById("main-image")
    console.log(image);
    return (
        <div id="home-container">
            <section id="header-section">
                <h1>This will be the header component</h1>
                <img id="main-image" src={sunset}></img>
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