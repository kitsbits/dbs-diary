import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
    const isAuthenticated = props.isAuthenticated;
    const Component = props.component;
    const path = props.path;
    return isAuthenticated || localStorage.getItem("token") ? (
            <Route path={path} component={Component}/>
        ) : (
            <Redirect to="/login"/>
        )

}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProtectedRoute);
