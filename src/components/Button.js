import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(SIZES.includes(buttonSize) ? buttonSize : SIZES[0]);

    return (
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf_yNF2iSATLm01M7EPcqwdNPeaqMLr_LBGcz72OqQX7aGu6Q/viewform" className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};