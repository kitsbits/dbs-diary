import React from "react";

export default function CalculatorComponent(props) {
    const calcStyles = {
        display: "flex",
        flexWrap: "wrap",
        padding: "25px 0 25px 0",
        width: "300px",
        margin: "auto",
        border: "2px solid yellow",
        marginTop: "55px"
    }

    const outputStyles = {
        width: "250px",
        margin: "auto",
        height: "100px",
        border: "2px solid yellow",
    }

    const rowStyles = {
        display: "flex",
        justifyContent: "space-between",
        width: "250px",
        margin: "25px auto auto auto"
    }

    const buttonStyles = {
        width: "50px",
        height: "50px",
        border: "2px solid yellow",

    }
    return (
        <div style={calcStyles}>
            <div style={outputStyles}></div>
            <div style={rowStyles}>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
            </div>
            <div style={rowStyles}>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
            </div>
            <div style={rowStyles}>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
            </div>
            <div style={rowStyles}>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
            </div>
            <div style={rowStyles}>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
                <div style={buttonStyles}></div>
            </div>
        </div>
    )
}
