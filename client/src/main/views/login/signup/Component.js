import React from "react";
import { Link } from "react-router-dom";

export default function signupComponent(props) {
    const containerStyles = {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        width: "250px",
        margin: "auto",
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }

    const linkContainer = {
        display: "flex",
        justifyContent: "space-between",
    }

    const inputStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "yellow",
        outline: "none",
        fontSize: "1em",
        border: "2px solid yellow",
        paddingLeft: "15px",
        marginBottom: "5px",
    }

    const buttonStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "yellow",
        outline: "none",
        fontSize: "1.5em",
        border: "2px solid yellow",
        borderRadius: "0px",
        cursor: "pointer",
    }

    const linkStyles = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <div style={containerStyles}>
            <div style={linkContainer}>
                <Link to="/signup" style={linkStyles}><h2>SIGNUP</h2></Link>
                <Link to="/login" style={linkStyles}><h2>LOGIN</h2></Link>
            </div>
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="firstName" placeholder="First Name" style={inputStyles}/>
                <input onChange={props.handleChange} type="email" name="email" placeholder="email" style={inputStyles}/>
                <input onChange={props.handleChange} type="text" name="username" placeholder="username" style={inputStyles}/>
                <input onChange={props.handleChange} type="password" name="password" placeholder="password" style={inputStyles}/>
                <button type="submit" style={buttonStyles}>SIGNUP</button>
                <p style={{color: "red"}}>{props.errMsg}</p>
            </form>
        </div>
    )
}
