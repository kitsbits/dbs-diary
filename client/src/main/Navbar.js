import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "50px",
        borderBottom: "2px solid white"
    }

    const linkStyles = {
        color: "white",
        textDecoration: "none",
        fontSize: "1.5em"
    }

    return (
        <div style={containerStyle}>
            <Link to="/calculator" style={linkStyles}>CALCULATOR</Link>
            <Link to="/journal" style={linkStyles}>JOURNAL</Link>
            <Link to="/shitlist" style={linkStyles}>SHIT LIST</Link>
        </div>
    )
}
