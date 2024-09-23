import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
    return (
        <div className="cards">
            <h1>We're gonna do amazing things this year!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/game.jpg"
                        text="Work on cool projects"
                        label="Teamwork"
                        path="/projects"
                        />

                        <CardItem
                        src="images/USACO.png"
                        text="Compete in a individual and team competitions"
                        label="Competitions"
                        path="/comps"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}