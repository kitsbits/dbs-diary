import React from "react";

export default function signinComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="username" value={props.input.username} placeholder="username"/>
            <input onChange={props.handleChange} type="password" name="password" value={props.input.password} placeholder="password"/>
            <button type="submit">LOGIN</button>
            <p style={{color: "red"}}>{props.errMsg}</p>
        </form>
    )
}
