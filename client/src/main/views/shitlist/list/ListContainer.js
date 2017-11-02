import React from "react";
import AddContainer from "../addform/AddContainer";
import ListComponent from "./ListComponent";
import ShitContainer from "./views/ShitContainer";
import {connect} from "react-redux";
import {getList} from "../../../../redux/actions/index.js";
import {Switch, Route} from "react-router-dom";

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
                <div key={shit._id}>
                    <ListComponent
                        shit={shit}/>
                    <Switch>
                        <Route path="/shitlist/:id"
                                render={props => {
                                        return (
                                        <ShitContainer shit={shit}{...props}/>
                                        )}}/>
                    </Switch>
                </div>
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
