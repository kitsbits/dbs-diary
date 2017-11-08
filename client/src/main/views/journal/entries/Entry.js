import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export default function Entry(props) {
    const date = moment(props.entry.createdAt).format('h:mm:ss a');

    const linkStyles = {
        textDecoration: "none",
        color: "yellow"
    }

    const containerStyles = {
        display: "flex",
        flexWrap: "wrap",
        padding: "0 25px 25px 0",
        border: "2px solid yellow",
        overflow: "hidden",
        marginBottom: "50px"
    }

    const countStyles = {
        border: "2px solid yellow",
        padding: "5px",
        height: "50px",
        width: "50px",
        margin: "0",
        marginRight: "25px",
        textAlign: "center",
        color: "yellow"
    }

    const detailsDivStyles = {
        marginRight: "100px",
        width: "250px"
    }

    const entryTextStyles = {
        height: "100px",
        overflow: "hidden",
        marginTop: "25px",
        fontSize: "1.25em"
    }

    return (
        <Link to={`/journal/${props.entry._id}`} style={linkStyles}><div style={containerStyles}>
            <h1 style={countStyles}>{props.count}</h1>
            <div style={detailsDivStyles}>
                <h1>{props.entry.title}</h1>
                <p>@ {date}</p>
            </div>
            <p style={entryTextStyles}>{props.entry.text}</p>
        </div></Link>
    )
}
