import React from "react";

export default function CalculatorComponent(props) {
    const calcStyles = {
        display: "flex",
        flexWrap: "wrap",
        padding: "25px 0 25px 0",
        width: "300px",
        margin: "auto",
        border: "2px solid green",
        marginTop: "55px"
    }

    const outputStyles = {
        width: "250px",
        margin: "auto",
        height: "100px",
        border: "2px solid green",
        padding: "15px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        fontSize: "2em",
        color: "green"
    }

    const rowStyles = {
        display: "flex",
        justifyContent: "space-between",
        width: "250px",
        margin: "25px auto auto auto"
    }

    const buttonStyles = {
        width: "50px",
        height: "50px",
        border: "2px solid green",
        backgroundColor: "transparent",
        color: "green",
        fontSize: "3em",
        outline: "none"
    }

    return (
        <div style={calcStyles}>
            <p id="output" style={outputStyles}></p>
            <div style={rowStyles}>
                <input onClick={props.concat} type="button" name="" value="7" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="8" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="9" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="/" style={buttonStyles}/>
            </div>
            <div style={rowStyles}>
                <input onClick={props.concat} type="button" name="" value="4" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="5" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="6" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="*" style={buttonStyles}/>
            </div>
            <div style={rowStyles}>
                <input onClick={props.concat} type="button" name="" value="1" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="2" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="3" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="-" style={buttonStyles}/>
            </div>
            <div style={rowStyles}>
                <input onClick={props.concat} type="button" name="" value="0" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="." style={buttonStyles}/>
                <input onClick={props.evaluate} type="button" name="" value="=" style={buttonStyles}/>
                <input onClick={props.concat} type="button" name="" value="+" style={buttonStyles}/>
            </div>
        </div>
    )
}
