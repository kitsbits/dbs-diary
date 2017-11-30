import React from "react";

export default function signupComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="firstName" placeholder="First Name"/>
            <input onChange={props.handleChange} type="email" name="email" placeholder="email"/>
            <input onChange={props.handleChange} type="text" name="username" placeholder="username"/>
            <input onChange={props.handleChange} type="password" name="password" placeholder="password"/>
            <button type="submit">SIGNUP</button>
            <p style={{color: "red"}}>{props.errMsg}</p>
        </form>
    )
}
