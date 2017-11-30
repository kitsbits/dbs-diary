import React from "react";
import { Link } from "react-router-dom";

export default function Year(props) {
    const yearNames = {
        margin: "10px",
        color: "yellow",
        textDecoration: "none",
        fontSize: "1.5em"
    }

    return (
        <Link to={`/journal/${props.year}`} style={yearNames}>{props.year}</Link>
    )
}
