import React from "react";
import Entry from "./Entry";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class EntriesContainer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.getEntries(`/api${nextProps.location.pathname}`);
        }
    }

    componentWillMount() {
        this.props.getEntries(`/api${this.props.location.pathname}`);
    }

    genEntries() {
        return this.props.journal.entries.map((entry, i) => {
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
        const containerStyles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "65%",
            padding: "25px",
            marginTop: "50px",
        }
        // const entries = this.genEntries();
        console.log(`/api${this.props.location.pathname}`);
        return (
            // entries.length <= 0 ?
            //     <Redirect to="/journal"/> :
                <div style={containerStyles}>{this.genEntries()}</div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(EntriesContainer);
