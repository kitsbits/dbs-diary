import React from "react";
import Component from "./Component";
import { connect } from "react-redux";
import { signin } from "../redux/login";


class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        };

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
        this.props.signin(this.state.inputs, this.props.history);
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        });
    }

    render() {
        const authErrCode = this.props.login.authErrCode.signin;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Sorry, the username or password is incorrect. Please try again."
        } else if (authErrCode > 499) {
            errMsg = "Server error!"
        }
        return(
            <Component
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                errMsg={errMsg}
                input={this.state.inputs}
                location={this.props.location.pathname}></Component>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {signin})(Signin);
