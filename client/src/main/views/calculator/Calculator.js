import React from "react";
import Navbar from "../../Navbar";
import CalculatorComponent from "./CalculatorComponent";

class Calculator extends React.Component {
    constructor() {
        super();
        this.concatOutput = this.concatOutput.bind(this);
        this.evaluateOutput = this.evaluateOutput.bind(this);
    }

    concatOutput(event) {
        document.getElementById("output").innerHTML += event.target.value;
    }

    evaluateOutput(e) {
        let total = document.getElementById("output").innerHTML;
        document.getElementById("tabulation").innerHTML += `<p>${eval(total)}</p>`;
        document.getElementById("output").innerHTML = "";
    }

    render() {
        return (
            <div>
                <Navbar/>
                <CalculatorComponent
                    concat={this.concatOutput}
                    evaluate={this.evaluateOutput}/>
            </div>
        )
    }
}

export default Calculator;
