import React from "react";
import Day from "./Day"

export default function CalContainer(props) {
    const calendarGridStyles = {
        width: "245px",
        height: "170px",
        display: "flex",
        flexWrap: "wrap"
    }

    const headerStyles = {
        margin: "0",
        marginTop: "55px",
        textAlign: "center"
    }

    const dayHeaderContainerStyles = {
        display: "flex",
        justifyContent: "space-around",
        width: "245px",
        height: "55px",
        textAlign: "center",
        margin: "0",
        fontSize: "1.5em"
    }
    return (
        <div>
            <h1 style={headerStyles}>THIS MONTH:</h1>
            <h3 style={dayHeaderContainerStyles}>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
                <p>S</p>
            </h3>
            <div style={calendarGridStyles}>
                {props.state.thisMonthsDays.map((day, i) => {
                    return (
                        <Day
                            key={i}
                            day={day}
                            year={props.state.year}
                            month={props.state.month}/>
                    )
                })}
            </div>
        </div>
    )
}
