import React from 'react'
import "../css/Home.css"
import sunset from "../African-Sunset.jpeg";

function Home() {

    var image = document.getElementById("main-image")
    console.log(image);
    return (
        <>
        <div id="home-container"> 
        <div class="gradient-component"></div>
        <div class="gradient-animation1"></div>
        <div class="gradient-animation2"></div>
            <div id='text-element'>
                <h1 id="main-heading">Hi there! Welcome to my personal website.</h1>
                <h2 id='sub-heading'>Please feel free to have a wander about.</h2>
            </div>
            <div id="picture-container">
                <img id="main-image" src={sunset}></img>
            </div>
        </div>
        </>
    )
}
export default Home