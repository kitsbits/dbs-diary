import React from "react";

export default function signinComponent(props) {
    return (
        <form>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">LOGIN</button>
        </form>
    )
}
