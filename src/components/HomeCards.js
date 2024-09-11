import React from "react";
import CardItem from "./CardItem";
import "./HomeCards.css";

export default function Cards() {
    return (
        <div className="cards">
            <h1>We're gonna do amazing things this year</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/aurora.jpg"
                        text="Work on cool projects"
                        label="Gyatt"
                        path="/projects"
                        />

                        <CardItem
                        src="images/turtle.jpg"
                        text="Compete in a individual and team competitions"
                        label="Skibidi"
                        path="/comps"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}