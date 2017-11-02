import React from "react";
import EntryComponent from "./EntryComponent";
import {connect} from "react-redux";
import {addEntry} from "../../../redux/actions";

class Journal extends React.Component {
    constructor() {
        super();
        this.state = {
            details: {
                title: "",
                text: "",
                lastUpdated: new Date()
            }
        }
        this.handleChange = this.handleChange.bind(this);
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
                }
            });
        });
    }

    handleSave(event) {
        event.preventDefault();
        // this.props.addEntry(this.state);
        console.log("in save");
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <EntryComponent
                    input={this.state.details}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(Journal);
