import React from "react";
import {Switch, Route} from "react-router-dom";
import ShitContainer from "./views/oneShit/ShitContainer";
import ListContainer from "./views/wholeList/ListContainer";
import Navbar from "../../../Navbar";

export default function ListLanding() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/shitlist" component={ListContainer}/>
                <Route path="/shitlist/:id" component={ShitContainer}/>
            </Switch>
        </div>
    )
}
