import React from "react";

export default function Day(props) {
    const dayStyles = {
        border: "1px solid orange",
        color: "orange",
        padding: "5px",
        fontSize: "1em",
        margin: "5px",
        height: "25px",
        width: "25px",
        display: "inline"
    }
    return (
            <h3 style={dayStyles}>
                {props.day === "" ? props.day : props.day + 1}
            </h3>
    )
}
