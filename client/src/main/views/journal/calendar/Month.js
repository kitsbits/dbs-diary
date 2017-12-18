import React from "react";
import { Link } from "react-router-dom";

export default function Month(props) {
    const monthNames = {
        margin: "10px",
        color: props.month.color,
        textDecoration: "none",
        fontSize: "1.5em"
    }

    return (
        props.month.post ?
        <Link to={`/journal/entries/${props.year}/${props.index}`} style={monthNames}>{props.month.month}</Link> :
        <h2 style={monthNames}>{props.month.month}</h2>
    )
}
