import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ProjectCards from "../ProjectCards";
export default function Projects() {
    return (
        <>
            <h1 className="projects">PROJECTS</h1>
            <ProjectCards/>
            <Footer/>
        </>
    );
        
}