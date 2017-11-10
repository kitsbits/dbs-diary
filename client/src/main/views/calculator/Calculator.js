import React from "react";
import Navbar from "../../Navbar";
import CalculatorComponent from "./CalculatorComponent";

class Calculator extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <CalculatorComponent/>
            </div>
        )
    }
}

export default Calculator;
