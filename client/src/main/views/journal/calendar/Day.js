import React from "react";
import { Link } from "react-router-dom"

export default function Day(props) {
    const dayStyles = {
        border: `1px solid ${props.day.color}`,
        color: `${props.day.color}`,
        padding: "5px",
        fontSize: "1em",
        margin: "5px",
        height: "25px",
        width: "25px",
        display: "inline",
        textDecoration: "none"
    }

    const blankDayStyles = {
        backgroundColor: "grey",
        color: "grey",
        padding: "5px",
        fontSize: "1em",
        margin: "5px",
        height: "25px",
        width: "25px",
        display: "inline"
    }

    return (
        props.day.post ?
            <Link to={`/entries/${props.year}/${props.month}/${props.day.date + 1}`} style={props.day === "" ? blankDayStyles : dayStyles}>{props.day.date + 1}</Link>
        :
            <h3 style={props.day === "" ? blankDayStyles : dayStyles}>{props.day === "" ? props.day.date : props.day.date + 1}</h3>

    )
}
