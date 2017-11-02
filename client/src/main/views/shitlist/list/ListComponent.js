import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export default function ListComponent(props) {
    const date = moment(props.shit.date, "YYYYMMDD").fromNow();
    return (
        <div>
            <h1>{props.shit.name}</h1>
            <h3>{date}</h3>
            <h5>{props.shit.location}</h5>
            <p>{props.shit.details}</p>
            <Link to={`/shitlist/${props.shit._id}`}><button type="button">MORE SHIT</button></Link>
        </div>
    )
}
