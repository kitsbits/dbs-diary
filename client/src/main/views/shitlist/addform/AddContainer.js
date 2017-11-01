import React from "react";
import AddComponent from "./AddComponent";

class AddContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            details: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.presist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return({
                ...prevState,
                [name]: newValue
            });
        });
    }

    render() {
        return (
            <AddComponent/>
        )
    }
}

export default AddContainer;
