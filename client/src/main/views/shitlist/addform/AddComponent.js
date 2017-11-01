import React from "react";

export default function AddComponent(props) {
    return (
        <form>
            <input type="text" name="name" value="" />
            <input type="text" name="location" value="" />
            <textarea name="details" value=""></textarea>
            <button type="submit">ADD SHIT</button>
        </form>
    )
}
