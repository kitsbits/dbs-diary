import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./views/login/redux/login";

function Navbar(props) {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "50px",
        borderBottom: "2px solid white",
    }

    const linkStyles = {
        color: "white",
        textDecoration: "none",
        fontSize: "1.5em",
        cursor: "pointer",
    }

    return (
        <div style={containerStyle}>
            <Link to="/calculator" style={linkStyles}>CALCULATOR</Link>
            <Link to="/journal" style={linkStyles}>JOURNAL</Link>
            <Link to="/shitlist" style={linkStyles}>SHIT LIST</Link>
            <h1 onClick={props.logout} style={linkStyles}>LOGOUT</h1>
        </div>
    )
}

export default connect(null, {logout})(Navbar);
