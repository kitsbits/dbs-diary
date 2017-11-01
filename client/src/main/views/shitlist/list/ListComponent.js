import React from "react";
import moment from "moment";

export default function ListComponent(props) {
    const date = moment(props.shit.date, "YYYYMMDD").fromNow();
    return (
        <div>
            <h1>{props.shit.name}</h1>
            <h3>{date}</h3>
            <h5>{props.shit.location}</h5>
            <p>{props.shit.details}</p>
        </div>
    )
}
