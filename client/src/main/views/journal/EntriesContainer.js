import React from "react";
import axios from "axios";
import Entry from "./Entry";

const url = "http://localhost:10100";

class EntriesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        axios.get(url+this.props.location.pathname).then(response => {
            this.setState({
                entries: response.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    genEntries() {
        return this.state.entries.map((entry, i) => {
            return (
                <Entry
                        key={entry._id}
                        entry={entry}
                        count={i + 1}/>
            )
        });
    }

    render() {
        const containerStyles = {
            display: "flex",
            flexDirection: "column",
            width: "65%",
            padding: "25px"
        }

        return (
            <div style={containerStyles}>{this.genEntries()}</div>
        )
    }
}

export default EntriesContainer;
