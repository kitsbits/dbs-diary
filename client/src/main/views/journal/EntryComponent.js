import React from "react";

export default function EntryComponent(props) {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        width: "65%",
        padding: "25px"
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column"
    }

    const startButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.5em",
        marginTop: "10px"
    }

    const saveButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        width: "155px",
        marginTop: "25px",
        alignSelf: "flex-end"
    }

    const titleInputStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        marginTop: "25px",
        padding: "10px"
    }

    const entryTextStyles = {
        outline: "none",
        backgroundColor: "transparent",
        color: "white",
        height: "65vh",
        border: "none",
        fontSize: "1em",
        padding: "15px",
        border: "2px solid white",
        marginTop: "25px",
        overflow: "scroll"
    }

    return (
        <div style={containerStyles}>
            <h1>HELLO, THERE. TELL ME YOUR SECRETS...</h1>
            <button onClick={props.handleStart} type="button" style={startButtonStyles}>START NEW ENTRY</button>
            <form onSubmit={props.handleSave} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="title" value={props.input.title} placeholder="ENTRY TITLE..." style={titleInputStyles}/>
                <textarea onChange={props.handleChange} name="text" placeholder="LET IT OUT..." value={props.input.text} style={entryTextStyles}></textarea>
                <button type="submit" style={saveButtonStyles}>SAVE ENTRY</button>
            </form>
        </div>
    )
}
