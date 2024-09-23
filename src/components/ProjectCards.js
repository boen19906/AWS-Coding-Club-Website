import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function ProjectCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/money.jpg"
                        text="Websites for Local Businesses"
                        label="Impact, Learning"
                     
                        />

                        <CardItem
                        src="images/game.jpg"
                        text="Unity Video Game Development "
                        label="Unity"
                        
                        />

                        <CardItem
                        src="images/langs.png"
                        text="Learn New Languages"
                        label="Learn"
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}