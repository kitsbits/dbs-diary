import React from "react";

export default function signupComponent(props) {
    return (
        <form>
            <input type="text" name="firstName" placeholder="First Name"/>
            <input type="email" name="email" placeholder="email"/>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="button">SIGNUP</button>
        </form>
    )
}
