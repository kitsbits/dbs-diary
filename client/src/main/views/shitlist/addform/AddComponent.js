import React from "react";

export default function AddComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="name" value={props.input.name} placeholder="Shit's name"/>
            <input onChange={props.handleChange} type="text" name="location" value={props.input.location} placeholder="Location: City, in the elevator, etc."/>
            <textarea onChange={props.handleChange} name="details" value={props.input.details} placeholder="Give us all the shitty details"></textarea>
            <button type="submit">ADD SHIT</button>
        </form>
    )
}
