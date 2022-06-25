import React from 'react'
import "../css/Home.css"
import img from "../images/Profilepic.png";

function Home() {

    return (
        <>
        <div id="home-container"> 
        <div class="gradient-component1"></div>
        <div class="gradient-animation2"></div>
        <div class="gradient-animation3"></div>
            <div id='text-element'>
                <h1 id="main-heading">Hi there! Welcome to my personal website.</h1>
                <h2 id='sub-heading'>Please feel free to have a wander about.</h2>
            </div>
            <div id="picture-container">
                <img id="main-image" src={img}>
                </img>
            </div>
        </div>
        </>
    )
}
export default Home