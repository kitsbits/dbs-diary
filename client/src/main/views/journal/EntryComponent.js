import React from "react";

export default function EntryComponent(props) {
    return (
        <form>
            <input onChange={props.handleChange} type="text" name="title" value={props.input.title} placeholder="Entry title"/>
            <textarea onChange={props.handleChange} name="text" placeholder="Let it out" value={props.input.text}></textarea>
        </form>
    )
}
