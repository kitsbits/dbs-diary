import React from "react";
import ShitComponent from "./ShitComponent";
import {connect} from "react-redux";
import {editShit, deleteShit} from "../../../../../../redux/actions";
import axios from "axios";

class ShitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            details: "",
            date: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:10100/shitlist/${this.props.match.params.id}`).then(response => {
            this.setState({
                name: response.data.name,
                location: response.data.location,
                details: response.data.details,
                date: response.data.date
            });
        }).catch(err => {
            console.log(err);
        });
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
                    handleDelete={this.handleDelete}/>
    }
}

export default connect(null, {editShit, deleteShit})(ShitContainer);
