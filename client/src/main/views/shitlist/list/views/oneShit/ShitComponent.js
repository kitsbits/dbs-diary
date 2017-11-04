import React from "react";
import moment from "moment";

export default function Shit(props) {
    // const date = moment(props.input.date).startOf('day').fromNow();
    const containerStyles = {
        display: "flex",
        padding: "55px"
    }

    const shitContainerStyles = {
        border: "2px solid green",
        color: "green",
        padding: "55px"
    }

    const detailsContainer = {
        borderTop: "1px solid green",
        paddingTop: "10px"
    }

    return (
        <div style={containerStyles}>
            <div style={shitContainerStyles}>
                <h1>{props.input.name}</h1>
                <h3>{props.input.date}</h3>
                <h5>{props.input.location}</h5>
                <p style={detailsContainer}>{props.input.details}</p>
            </div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="name" value={props.input.name}/>
                <input onChange={props.handleChange} type="text" name="location" value={props.input.location}/>
                <textarea onChange={props.handleChange} name="details" value={props.input.details}></textarea>
                <button type="submit">EDIT SHIT</button>
            </form>
        </div>
    )
}
