import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="https://www.instagram.com/"className="social-logo">
                            Follow us on Instagram!
                        </Link>
                    </div>
                    <div className="social-icons">
                        <div className="social-icon-instagram">
                            <Link className="social-icons-link-instagram"
                            to="https://www.instagram.com/awscodingclub/"
                            target="_blank"
                            aria-label="Instagram">
                                <i className="fab fa-instagram"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}