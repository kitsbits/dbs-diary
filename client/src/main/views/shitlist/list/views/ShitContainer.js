import React from "react";
import ShitComponent from "./ShitComponent";
import {connect} from "react-redux";
import {editShit, deleteShit} from "../../../../../redux/actions";

class ShitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.shit.name,
            location: props.shit.location,
            details: props.shit.details
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return({
                ...prevState,
                [name]: newValue
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editShit(this.props.shit._id, this.state);
    }

    handleDelete() {
        this.props.deleteShit(this.props.shit._id);
    }

    render() {
        return <ShitComponent
                    input={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    shit={this.props.shit}/>
    }
}

export default connect(null, {editShit, deleteShit})(ShitContainer);
