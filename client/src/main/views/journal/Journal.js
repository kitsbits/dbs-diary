import React from "react";
import EntryComponent from "./EntryComponent";
import CalContainer from "./calendar/CalContainer";
import {connect} from "react-redux";
import {saveEntry, startEntry} from "../../../redux/actions";

class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {
                title: props.journalEntry.title,
                text: props.journalEntry.text,
                lastUpdated: props.journalEntry.lastUpdated
            },
            id: props.journalEntry.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(prevState => {
            const name = event.target.name;
            const newValue = event.target.value;
            return({
                details: {
                    ...prevState.details,
                    [name]: newValue
                },
                id: prevState.id
            });
        });
    }

    handleStart(event) {
        event.preventDefault();
        this.props.startEntry(this.state.details);
    }

    handleSave(event) {
        event.preventDefault();
        // this.props.saveEntry(this.state.id, this.state.details);
    }

    render() {
        const containerStyles = {
            display: "flex",
            justifyContent: "space-around"
        }
        return (
            <div style={containerStyles}>
                <EntryComponent
                    input={this.state.details}
                    handleChange={this.handleChange}
                    handleStart={this.handleStart}
                    handleSave={this.handleSave}/>
                <CalContainer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {saveEntry, startEntry})(Journal);
