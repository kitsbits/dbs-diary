import React from "react";
import AddContainer from "../addform/AddContainer";
import ListComponent from "./ListComponent";
import {connect} from "react-redux";
import {getList} from "../../../../redux/actions/index.js";

class ListContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getList()
    }

    genList() {
        return this.props.shitList.map(shit => {
            return (
                <ListComponent
                    key={shit._id}
                    shit={shit}/>
            );
        });
    }

    render() {
        return (
            <div>
                <AddContainer/>
                {this.genList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getList})(ListContainer);
