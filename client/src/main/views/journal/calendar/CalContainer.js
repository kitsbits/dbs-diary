import React from "react";
import moment from "moment";
import Day from "./Day"
import axios from "axios";

const url = "http://localhost:10100/journal";
const now = new Date();
const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

class CalContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            thisMonthsDays: [],
            month: now.getMonth(),
            year: now.getFullYear(),
            day: now.getDate(),
            monthsPosts: [],
            yearsPosts: [],
            daysPosts: []
        }
        this.getDaysPosts = this.getDaysPosts.bind(this);
    }

    genThisMonthCalendar() {
        const daysWithPostsArray = this.state.monthsPosts.reduce((arr, current) => {
            const daysWithPostsNumbers = new Date(current.createdAt).getDate();
            arr.push(daysWithPostsNumbers);
            return arr;
        }, []);
        console.log(daysWithPostsArray);
        const daysBeforeFirst = moment().startOf('month').day() - 1;
        const daysArray = [];
        let daysBeforeFirstCount = 0;
        for (let i = 0; i < 35; i++) {
            if (daysBeforeFirstCount < daysBeforeFirst || i > days + daysBeforeFirst - 1) {
                daysArray.push("");
                daysBeforeFirstCount++;
            } else {

                if (daysWithPostsArray.includes(i - daysBeforeFirst)) {
                    daysArray.push({
                        date: i - daysBeforeFirst,
                        color: "yellow",
                        post: true
                    });
                } else {
                    daysArray.push({
                        date: i - daysBeforeFirst,
                        color: "white",
                        post: false
                    });
                }
            // daysArray.push(i - daysBeforeFirst);
            }
        }
        this.setState(prevState => {
            return {
                ...prevState,
                thisMonthsDays: daysArray
            }
        });
    }

    getMonthsPosts() {
        axios.get(url, {
            params: {
                year: this.state.year,
                month: this.state.month
            }
        }).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    monthsPosts: response.data
                }
            });
            this.genThisMonthCalendar();
        }).catch(err => {
            console.log(err);
        });
    }

    getDaysPosts(day) {
        axios.get("http://localhost:10100/entries", {
            params: {
                year: this.state.year,
                month: this.state.month,
                day: day
            }
        }).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    daysPosts: response.data
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getMonthsPosts();
    }

    render() {
        console.log(this.state);

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
                    {this.state.thisMonthsDays.map((day, i) => {
                        return (
                            <Day
                                key={i}
                                day={day}
                                getPosts={this.getDaysPosts}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CalContainer;
