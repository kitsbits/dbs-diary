import React from "react";
import axios from "axios";
import Entry from "./Entry";

const url = "http://localhost:10100";

class EntriesContainer extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     entries: []
        // };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.getEntries(nextProps.location.pathname);
        }
    }

    // componentDidMount() {
    //     this.props.getEntries(this.props.location.pathname);
    // }

    genEntries() {
        return this.props.state.map((entry, i) => {
            return (
                <Entry
                        key={entry._id}
                        entry={entry}
                        count={i + 1}
                        getEntries={this.props.getEntries}
                        pathname={this.props.location.pathname}/>
            )
        });
    }

    render() {
        this.props.getEntries(this.props.location.pathname);

        const containerStyles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "65%",
            padding: "25px",
            marginTop: "50px"
        }

        return (
            <div style={containerStyles}>{this.genEntries()}</div>
        )
    }
}

export default EntriesContainer;
