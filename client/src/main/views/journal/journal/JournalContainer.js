import React from "react";
import axios from "axios";
import JournalComponent from "./JournalComponent";

class JournalContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getEntry(this.props.match.params.id);
        }
    }
    render() {
        return (
            <JournalComponent
                input={this.props.input}
                handleChange={this.props.handleChange}
                handleStart={this.props.handleStart}
                handleSave={this.props.handleSave}
                handleDelete={this.props.handleDelete}/>
        )
    }

}

export default JournalContainer
