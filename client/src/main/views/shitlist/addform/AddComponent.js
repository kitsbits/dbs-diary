import React from "react";

export default function AddComponent(props) {
    const formStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        width: "350px",
        height: "300px",
        marginTop: "55px"
    }

    const inputStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1.5em",
        border: "2px solid green",
        paddingLeft: "15px"
    }

    const textAreaStyles = {
        height: "170px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1.5em",
        border: "2px solid green",
        paddingLeft: "15px"
    }

    const buttonStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1.5em",
        border: "2px solid green"
    }

    return (
        <form onSubmit={props.handleSubmit} style={formStyles}>
            <input onChange={props.handleChange} type="text" name="name" value={props.input.name} placeholder="Shit's name" style={inputStyles}/>
            <input onChange={props.handleChange} type="text" name="location" value={props.input.location} placeholder="Location: City, in the elevator, etc." style={inputStyles}/>
            <textarea onChange={props.handleChange} name="details" value={props.input.details} placeholder="Give us all the shitty details" style={textAreaStyles}></textarea>
            <button type="submit" style={buttonStyles}>ADD SHIT</button>
        </form>
    )
}
