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
        this.getEntries = this.getEntries.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.getEntries(nextProps.location.pathname);
        }
    }

    componentDidMount() {
        this.getEntries(this.props.location.pathname);
    }

    getEntries(pathname) {
        axios.get(url+pathname).then(response => {
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
                        count={i + 1}
                        getEntries={this.getEntries}
                        pathname={this.props.location.pathname}/>
            )
        });
    }

    render() {
        const containerStyles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "65%",
            padding: "25px"
        }

        return (
            <div style={containerStyles}>{this.genEntries()}</div>
        )
    }
}

export default EntriesContainer;
