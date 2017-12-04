import React from "react";
import JournalContainer from "./journal/JournalContainer";
import CalContainer from "./calendar/CalContainer";
import EntriesContainer from "./entries/EntriesContainer";
import Navbar from "../../Navbar";
import { saveEntry, startEntry, deleteEntry, getEntries } from "./redux/journal.js";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";

// import * as api from "../../../api";

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const url = "/journal/";
const now = new Date();
const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

const containerStyles = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
}

class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendar: {
                thisMonthsDays: [],
                thisYearsMonths: [],
                allYears: [now.getFullYear()],
                month: now.getMonth(),
                year: now.getFullYear(),
                day: now.getDate(),
                monthsInYear: moment.monthsShort(),
                monthsPosts: [],
                yearsPosts: [],
                daysPosts: []
            },
            journal: {},
            entries: props.entries
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getEntry = this.getEntry.bind(this);
        this.getEntries = this.getEntries.bind(this);
        this.clearJournal = this.clearJournal.bind(this);
        this.changeMonthCalendarView = this.changeMonthCalendarView.bind(this);
        this.getMonthsPosts = this.getMonthsPosts.bind(this);
    }
    ////////////////////////
    /// CALENDAR METHODS \\\
    ////////////////////////
    genThisMonthCalendar() {
        const daysWithPostsArray = this.state.calendar.monthsPosts.reduce((arr, current) => {
            const daysWithPostsNumbers = new Date(current.createdAt).getDate();
            arr.push(daysWithPostsNumbers);
            return arr;
        }, []);
        const daysBeforeFirst = moment().startOf('month').day() - 1;
        const daysArray = [];
        let daysBeforeFirstCount = 0;
        for (let i = 0; i < 35; i++) {
            if (daysBeforeFirstCount < daysBeforeFirst || i > days + daysBeforeFirst - 1) {
                daysArray.push("");
                daysBeforeFirstCount++;
            } else {
                if (daysWithPostsArray.includes(i - daysBeforeFirst + 1)) {
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
            }
        }
        this.setState(prevState => {
            return {
                ...prevState,
                calendar: {
                    ...prevState.calendar,
                    thisMonthsDays: daysArray
                }
            }
        });
    }

    getMonthsPosts() {
        axios.get(url + "entries/", {
            params: {
                year: this.state.calendar.year,
                month: this.state.calendar.month
            }
        }).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    calendar: {
                        ...prevState.calendar,
                        monthsPosts: response.data
                    }
                }
            });
            this.genThisMonthCalendar();
        }).catch(err => {
            console.log(err);
        });
    }

    genThisYearCalendar() {
        const monthsWithPosts = Array.from(new Set(this.state.calendar.yearsPosts.map(month => {
            return new Date(month.createdAt).getMonth();
        })));
        const monthsArray = [];
        for (let i = 0; i < 12; i++) {
            if (monthsWithPosts.includes(i)) {
                monthsArray.push({
                    month: this.state.calendar.monthsInYear[i].toUpperCase(),
                    color: "yellow",
                    post: true
                });
            } else {
                monthsArray.push({
                    month: this.state.calendar.monthsInYear[i].toUpperCase(),
                    color: "white",
                    post: false
                });
            }
        }
        this.setState(prevState => {
            return {
                ...prevState,
                calendar: {
                    ...prevState.calendar,
                    thisYearsMonths: monthsArray
                }
            }
        });
    }

    getYearsPosts() {
        axios.get(url, {
            params: {
                year: this.state.calendar.year
            }
        }).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    calendar: {
                        ...prevState.calendar,
                        yearsPosts: response.data
                    }
                };
            });
            this.genThisYearCalendar();
        }).catch(err => {
            console.log(err);
        });
    }

    changeMonthCalendarView(newMonth) {
        this.setState(prevState => {
            return {
                ...prevState,
                calendar: {
                    ...prevState.calendar,
                    month: newMonth
                }
            }
        })
    }

    ///////////////////////
    /// JOURNAL METHODS \\\
    ///////////////////////
    handleChange(event) {
        event.persist();
        this.setState(prevState => {
            const name = event.target.name;
            const newValue = event.target.value;
            return({
                ...prevState,
                journal: {
                    ...prevState.journal,
                    [name]: newValue
                }
            });
        });
    }

    handleStart() {
        axios.post(url, {title: ""}).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                journal: response.data
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }

    handleSave(event) {
        event.preventDefault();
        this.props.saveEntry(this.state.journal._id, this.state.journal);
        this.getMonthsPosts();
        this.getYearsPosts();
    }

    handleDelete(event) {
        if (window.confirm("Are you sure you want to delete this entry?") === true) {
            this.props.deleteEntry(this.state.journal._id);
            // api.deleteEntry(ID OF ENTRY).then(...)

            this.setState(prevState => {
                return {
                    ...prevState,
                    journal: {
                        ...prevState.journal,
                        title: "",
                        text: ""
                    }
                }
            });
            document.getElementById("entry-form").disabled = true;
            document.getElementById("save-button").disabled = true;
        }
    }

    getEntry(id) {
        axios.get(url+id).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    journal: response.data
                }
            })
        }).catch(err => {
            console.log(err);
        })
    }

    clearJournal() {
        this.setState(prevState => {
            return {
                ...prevState,
                journal: {}
            }
        });
    }

    ///////////////////////
    /// ENTRIES METHODS \\\
    ///////////////////////
    getEntries(pathname) {
        let url = "/";
        this.props.getEntries(url, pathname);
    }


    //////////////////////////
    /// LIFE CYCLE METHODS \\\
    //////////////////////////
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.getMonthsPosts();
            this.getYearsPosts();
        }
    }

    componentDidMount() {
        this.getMonthsPosts();
        this.getYearsPosts();

    }

    //////////////
    /// RENDER \\\
    //////////////
    render() {
        return (
            <div>
                <Navbar/>
                <div style={containerStyles}>
                    <Switch>
                        <Route exact path="/journal" render={props => {
                            return (
                                    <JournalContainer
                                        input={this.state.journal}
                                        handleChange={this.handleChange}
                                        handleStart={this.handleStart}
                                        handleSave={this.handleSave}
                                        handleDelete={this.handleDelete}
                                        clearJournal={this.clearJournal}{...props}/>
                            )
                        }}/>
                        <Route path="/journal/entries/:year/:month/:day" render={props => {
                            return (
                                <EntriesContainer
                                    getEntries={this.getEntries}
                                    state={this.state.entries}{...props}/>
                            )
                        }}/>
                        <Route path="/journal/entries/:year/:month" render={props => {
                            return (
                                <EntriesContainer
                                    getEntries={this.getEntries}
                                    state={this.state.entries}{...props}/>
                            )
                        }}/>
                        <Route path="/journal/entries/:year" render={props => {
                            return (
                                <EntriesContainer
                                    getEntries={this.getEntries}
                                    state={this.state.entries}{...props}/>
                            )
                        }}/>
                        <Route path="/journal/:id" render={props => {
                            return (
                                    <JournalContainer
                                        input={this.state.journal}
                                        handleChange={this.handleChange}
                                        handleStart={this.handleStart}
                                        handleSave={this.handleSave}
                                        handleDelete={this.handleDelete}
                                        getEntry={this.getEntry}
                                        clearJournal={this.clearJournal}{...props}/>
                            )
                        }}/>
                    </Switch>
                    <CalContainer
                        state={this.state.calendar}
                        changeMonth={this.changeMonthCalendarView}
                        getPosts={this.getMonthsPosts}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {saveEntry, startEntry, deleteEntry, getEntries})(Journal);
