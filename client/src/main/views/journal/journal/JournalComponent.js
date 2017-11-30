import React from "react";

export default function JournalComponent(props) {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        width: "65%",
        padding: "25px",
    }

    const formStyles = {
        display: "none",
        flexDirection: "column",
    }

    const blankFormStyles = {
        display: "flex",
        flexDirection: "column",
    }

    const startButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.5em",
        marginTop: "10px",
        cursor: "pointer",
        borderRadius: "0px",
    }

    const saveButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        width: "155px",
        marginTop: "25px",
        cursor: "pointer",
        borderRadius: "0px",
    }
    const deleteButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        width: "155px",
        marginTop: "25px",
        marginLeft: "15px",
        cursor: "pointer",
        marginRight: "55px",
        display: props.input.title === undefined ? "none" : "inline",
        borderRadius: "0px",
    }

    const titleInputStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        marginTop: "25px",
        padding: "10px",
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
        overflow: "scroll",
    }

    const blankTitleInputStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        border: "2px solid grey",
        color: "grey",
        fontSize: "1.5em",
        marginTop: "25px",
        padding: "10px",
    }

    const blankEntryTextStyles = {
        outline: "none",
        backgroundColor: "transparent",
        color: "grey",
        height: "65vh",
        border: "none",
        fontSize: "1em",
        padding: "15px",
        border: "2px solid grey",
        marginTop: "25px",
        overflow: "scroll",
    }

    const buttonContainerStyles = {
        alignSelf: "flex-end",
    }

    return (
        <div style={containerStyles}>
            <h1>HELLO, THERE. TELL ME YOUR SECRETS...</h1>
            <button onClick={props.handleStart } type="button" style={startButtonStyles}>START NEW ENTRY</button>
            <div id="blank-form" style={blankFormStyles}>
                <div style={blankTitleInputStyles}>ENTRY TITLE...</div>
                <div style={blankEntryTextStyles}>LET IT OUT...</div>
            </div>
            <form id="entry-form" onSubmit={props.handleSave} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="title" value={props.input.title} placeholder="ENTRY TITLE..." style={titleInputStyles}/>
                <textarea onChange={props.handleChange} name="text" placeholder="LET IT OUT..." value={props.input.text} style={entryTextStyles}></textarea>
                <div style={buttonContainerStyles}>
                    <button id="delete-button" onClick={props.handleDelete} type="button" style={deleteButtonStyles}>DELETE ENTRY</button>
                    <button id="save-button" type="submit" style={saveButtonStyles}>SAVE ENTRY</button>
                </div>
            </form>
        </div>
    )
}
