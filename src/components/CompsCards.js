import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function CompsCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/uwtacoma.png"
                        text="Puget Sound Programming Competeiton"
                        label="UW Tacoma"
                     
                        />

                        <CardItem
                        src="images/plu.png"
                        text="HS Programing Competetion"
                        label="PLU"
                        
                        />
                        <CardItem
                        src="images/USACO.png"
                        text="United States Computing Olympiad"
                        label="USACO"
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}