import React from "react";
import AddContainer from "../../../addform/AddContainer";
import ListComponent from "./ListComponent";
import { connect } from "react-redux";
import { getList } from "../../../redux/shitlist.js";

class ListContainer extends React.Component {

    componentDidMount() {
        this.props.getList()
    }

    genList() {
        return this.props.list.shitList.map(shit => {
            const itemContainerStyles = {
                marginTop: "35px"
            }

            return (
                <div style={itemContainerStyles} key={shit._id}>
                    <ListComponent
                        shit={shit}/>

                </div>
            );
        });
    }

    render() {
        const containerStyles = {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "55px"
        }

        const listContainerStyles = {
            display: "flex",
            width: "45%",
            flexDirection: "column",
            paddingLeft: "75px",
            paddingBottom: "50px",
            borderLeft: "2px solid green",
            color: "green"
        }

        return (
            <div style={containerStyles}>
                <AddContainer/>
                <div style={listContainerStyles}>
                    {this.genList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getList})(ListContainer);
