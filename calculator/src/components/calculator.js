import React, { Component } from 'react';
import OutputBox from './output-box';
import InputButton from './input-button';

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            result: ''
        };
    }

    appendDataToResult = (data) => {
        this.setState({
            result: this.state.result + data
        });
    }

    calculateResult = () => {
        this.setState({
            result: eval(this.state.result).toString()
        });
        console.log(this.state.result);
    }

    render() {
        return (
            <div className="calculator-box">
                <div>
                    <OutputBox result={this.state.result} />
                </div>
                <div>
                    <div>
                        <InputButton value={1} result={(data) => { this.appendDataToResult('1'); }} />
                        <InputButton value={2} result={(data) => { this.appendDataToResult('2'); }} />
                        <InputButton value={3} result={(data) => { this.appendDataToResult('3'); }} />
                        <InputButton value={"+"} result={(data) => { this.appendDataToResult('+'); }} />
                    </div>
                    <div>
                        <InputButton value={4} result={(data) => { this.appendDataToResult('4'); }} />
                        <InputButton value={5} result={(data) => { this.appendDataToResult('5'); }} />
                        <InputButton value={6} result={(data) => { this.appendDataToResult('6'); }} />
                        <InputButton value={"-"} result={(data) => { this.appendDataToResult('-'); }} />
                    </div>
                    <div>
                        <InputButton value={7} result={(data) => { this.appendDataToResult('7'); }} />
                        <InputButton value={8} result={(data) => { this.appendDataToResult('8'); }} />
                        <InputButton value={9} result={(data) => { this.appendDataToResult('9'); }} />
                        <InputButton value={"*"} result={(data) => { this.appendDataToResult('*'); }} />
                    </div>
                    <div>
                        <InputButton value={0} result={(data) => { this.appendDataToResult('0'); }} />
                        <InputButton value={"%"} result={(data) => { this.appendDataToResult('%'); }} />
                        <InputButton value={"/"} result={(data) => { this.appendDataToResult('/'); }} />
                        <InputButton value={"="} result={() => { this.calculateResult(); }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;