import React from "react";
import JournalContainer from "./journal/JournalContainer";
import CalContainer from "./calendar/CalContainer";
import EntriesContainer from "./entries/EntriesContainer";
import Navbar from "../../Navbar";

import {Switch, Route} from "react-router-dom";

export default function Journal() {
    const containerStyles = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }

    return (
        <div>
            <Navbar/>
            <div style={containerStyles}>
                <Switch>
                    <Route exact path="/journal" component={JournalContainer}/>
                    <Route path="/journal/:year/:month/:day" component={EntriesContainer}/>
                    <Route path="/journal/:id" component={JournalContainer}/>
                </Switch>
                <CalContainer/>
            </div>
        </div>
    )
}
