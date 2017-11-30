import React from "react";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";
import moment from "moment";

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

    const monthContainerStyles = {
        display: "flex",
        flexWrap: "wrap",
        width: "245px",
        marginTop: "35px",
        padding: "25px 0",
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
    }

    const yearContainerStyles = {
        display: "flex",
        flexWrap: "wrap",
        width: "245px",
        marginTop: "20px"
    }

    const currentMonth = moment([props.state.year, props.state.month, props.state.day]).format('MMMM');
    return (
        <div>
            <h1 style={headerStyles}>{currentMonth.toUpperCase()}:</h1>
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
            <div style={monthContainerStyles}>
                {props.state.thisYearsMonths.map((month, i) => {
                    return (
                        <Month
                            key={month.month + i}
                            month={month}
                            index={i}
                            year={props.state.year}/>
                    )
                })}
            </div>
            <div style={yearContainerStyles}>
                {props.state.allYears.map((year, i) => {
                    return (
                        <Year
                            key={year + i}
                            year={year}/>
                    )
                })}
            </div>
        </div>
    )
}
