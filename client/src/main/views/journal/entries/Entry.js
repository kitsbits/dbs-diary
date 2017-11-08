import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteEntry} from "../../../../redux/actions";

function Entry(props) {
    const date = moment(props.entry.createdAt).format('h:mm:ss a');

    const linkStyles = {
        textDecoration: "none",
        color: "yellow"
    }

    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        overflow: "hidden",
        width: "350px",
        height: "350px",
        padding: "0 25px 25px 0",
        border: "2px solid yellow",
        overflow: "hidden",
        marginBottom: "50px"
    }

    const countStyles = {
        border: "2px solid yellow",
        padding: "5px",
        height: "50px",
        width: "50px",
        margin: "0",
        textAlign: "center",
        color: "yellow",
        alignSelf: "flex-start"
    }

    const detailsDivStyles = {
        width: "250px"
    }

    const entryTextStyles = {
        overflow: "hidden",
        marginTop: "25px",
        fontSize: "1.25em"
    }

    const buttonContainerStyles = {
        display: "flex",
        width: "100%",
        marginLeft: "25px",
        justifyContent: "space-around"
    }

    const buttonStyles = {
        height: "35px",
        width: "70px",
        backgroundColor: "transparent",
        border: "1px solid yellow",
        color: "yellow",
        fontSize: "1em",
        cursor: "pointer",
        outline: "none"
    }

    return (
        <div style={containerStyles}>
            <h1 style={countStyles}>{props.count}</h1>
            <div style={detailsDivStyles}>
                <h1>{props.entry.title}</h1>
                <p>@ {date}</p>
            </div>
            <p style={entryTextStyles}>{props.entry.text}</p>
            <div style={buttonContainerStyles}>
                <Link to={`/journal/${props.entry._id}`} style={linkStyles}><button type="button" style={buttonStyles}>EDIT</button></Link>
                <button onClick={(e) => {
                    props.deleteEntry(props.entry._id);
                    props.getEntries(props.pathname);
                }}
                    type="button" style={buttonStyles}>DELETE</button>
            </div>
        </div>
    )
}

export default connect(null, {deleteEntry})(Entry);
