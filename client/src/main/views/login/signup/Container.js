import React from "react";
import Component from "./Component";
import { connect } from "react-redux";
import { signup } from "../redux/login";

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                firstName: "",
                email: "",
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [name]: newValue
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state.inputs, this.props.history);
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: "",
                email: "",
                username: "",
                password: ""
            }
        });
    }

    render() {
        const authErrCode = this.props.login.authErrCode.signup;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Sorry, this username is already taken! Please choose another."
        } else if (authErrCode > 499) {
            errMsg = "Server error!"
        }

        return(
            <Component
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                errMsg={errMsg}
                input={this.state.inputs}></Component>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {signup})(Signup)
