import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CompsCards from "../CompsCards";

export default function Comps() {
    return (
        <>
            <h1 className="comps">COMPETITIONS</h1>
            <hr className="divider"/>
            <CompsCards/>
            <Footer/>
        </>
        
    );
}