import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/images/world.png" alt="world"></img>
            <h1>Welcome to Coding Club!</h1>
            <p>Get ready for a great year!</p>
            <div className="hero-btn">
                <Button 
                onClick={() => {
                    window.scrollTo({
                        top: window.scrollY + 650, // Scrolls to the bottom of the page
                        behavior: 'smooth' // Adds a smooth scroll effect
                    });
                }}
                className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                link= "https://docs.google.com/forms/d/e/1FAIpQLSf_yNF2iSATLm01M7EPcqwdNPeaqMLr_LBGcz72OqQX7aGu6Q/viewform"
    
                >
                Join Us <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    );
}
