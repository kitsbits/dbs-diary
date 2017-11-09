import React from "react";
import JournalContainer from "./journal/JournalContainer";
import CalContainer from "./calendar/CalContainer";
import EntriesContainer from "./entries/EntriesContainer";
import Navbar from "../../Navbar";
import {saveEntry, startEntry, deleteEntry} from "../../../redux/actions";

import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment";
import axios from "axios";

import * as api from "../../../api";

const url = "http://localhost:10100/journal/";
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
                month: now.getMonth(),
                year: now.getFullYear(),
                day: now.getDate(),
                monthsPosts: [],
                yearsPosts: [],
                daysPosts: []
            },
            journal: {},
            entries: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.getEntry = this.getEntry.bind(this);
        this.getEntries = this.getEntries.bind(this);
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
        axios.get(url, {
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

    handleStart(event) {
        event.preventDefault();
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
    }

    handleCancel(event) {
        if (window.confirm("Are you sure you want to delete this entry?") === true) {
            api.deleteEntry(this.state.journal._id).then(response => {
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
            }).catch(err => {
                console.log(err);
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

    ///////////////////////
    /// ENTRIES METHODS \\\
    ///////////////////////
    getEntries(pathname) {
        let url = "http://localhost:10100";
        axios.get(url+pathname).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    entries: response.data
                }
            });
        }).catch(err => {
            console.log(err);
        })
    }


    //////////////////////////
    /// LIFE CYCLE METHODS \\\
    //////////////////////////
    componentDidMount() {
        this.getMonthsPosts();
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
                                        handleCancel={this.handleCancel}{...props}/>
                            )
                        }}/>
                        <Route path="/journal/:year/:month/:day" render={props => {
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
                                        handleCancel={this.handleCancel}
                                        getEntry={this.getEntry}{...props}/>
                            )
                        }}/>
                    </Switch>
                    <CalContainer
                        state={this.state.calendar}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {saveEntry, startEntry, deleteEntry})(Journal);
