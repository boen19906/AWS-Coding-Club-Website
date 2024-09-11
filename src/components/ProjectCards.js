import React from "react";
import CardItem from "./CardItem";
import "./HomeCards.css";

export default function ProjectCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/aurora.jpg"
                        text="Websites for Local Businesses"
                        label="Impact, Learning"
                     
                        />

                        <CardItem
                        src="images/turtle.jpg"
                        text="Personal Projects"
                        label="Fun"

                        />

                        <CardItem
                        src="images/fun2.jpeg"
                        text="Science Fair"
                        label="Games, Apps"
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}