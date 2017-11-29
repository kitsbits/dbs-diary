import React from "react";
import { Switch, Route } from "react-router-dom";

import Calculator from "./views/calculator/Calculator";
import Journal from "./views/journal/Journal";
import Landing from "./views/Landing";
import ListLanding from "./views/shitlist/list/ListLanding";
import Signin from "./views/login/signin/Container";
import Signup from "./views/login/signup/Container";

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Signup}/>
            </Switch>
            {/* <Signup></Signup>
            <Signin></Signin> */}
            {/* <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/calculator" component={Calculator}/>
                <Route path="/journal" component={Journal}/>
                <Route path="/shitlist" component={ListLanding}/>
            </Switch> */}
        </div>
    )
}
