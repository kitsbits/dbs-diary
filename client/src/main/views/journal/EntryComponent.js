import React from "react";

export default function EntryComponent(props) {

    return (
        <div>
            <h1>HELLO, THERE. TELL ME YOUR SECRETS...</h1>
            <button onClick={props.handleStart} type="button">START NEW ENTRY</button>
            <form onSubmit={props.handleSave}>
                <input onChange={props.handleChange} type="text" name="title" value={props.input.title} placeholder="ENTRY TITLE"/>
                <textarea onChange={props.handleChange} name="text" placeholder="LET IT OUT" value={props.input.text}></textarea>
                <button type="submit">SAVE ENTRY</button>
            </form>
        </div>
    )
}
