import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Button } from "./Button";
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();

    }, [])

    window.addEventListener('resize', showButton);


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container"></div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                AWS Coding Club <i class="fa fa-code" aria-hidden="true"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fa fa-window-close-o" : "fas fa-bars"}/>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/comps" className="nav-links" onClick={closeMobileMenu}>
                        Competitions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf_yNF2iSATLm01M7EPcqwdNPeaqMLr_LBGcz72OqQX7aGu6Q/viewform" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button link="https://docs.google.com/forms/d/e/1FAIpQLSf_yNF2iSATLm01M7EPcqwdNPeaqMLr_LBGcz72OqQX7aGu6Q/viewform" buttonStyle="btn--outline">Sign Up</Button>}
        </nav>
        </>
        
    )
}

export default NavBar;