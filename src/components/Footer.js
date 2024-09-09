import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Connect with Us <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <div className="social-icon-instagram">
                            <Link className="social-icons-link-instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                                <i className="fab fa-instagram"/>
                            </Link>
                        </div>
                        <div className="social-icon-twitter">
                            <Link className="social-icons-link-twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter">
                                <i className="fab fa-twitter"/>
                            </Link>
                        </div>
                        <div className="social-icon-facebook">
                            <Link className="social-icons-link-facebook"
                            to="/"
                            target="_blank"
                            aria-label="Twitter">
                                <i className="fab fa-facebook"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}