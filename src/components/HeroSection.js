import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/world.mp4" autoPlay loop muted/>
            <h1>Welcome to Coding Club!</h1>
            <p>Get ready for a great year!</p>
            <div className="hero-btn">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >
                    Join Us <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    );
}
