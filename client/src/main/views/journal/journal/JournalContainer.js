import React from "react";
import JournalComponent from "./JournalComponent";

class JournalContainer extends React.Component {

    constructor() {
        super();
        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getEntry(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.clearJournal();
        }
    }

    handleStart(e) {
        if (document.getElementById("blank-form").style.display === "flex") {
            document.getElementById("blank-form").style.display = "none";
            document.getElementById("entry-form").style.display = "flex";
        }
        this.props.handleStart();
    }

    render() {
        return (
            <JournalComponent
                input={this.props.input}
                handleChange={this.props.handleChange}
                handleStart={this.handleStart}
                handleSave={this.props.handleSave}
                handleDelete={this.props.handleDelete}/>
        )
    }

}

export default JournalContainer
