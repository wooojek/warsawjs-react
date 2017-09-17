import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state  = {
            count: this.props.count,
        }
    }

    incrementCount = () => {
        let a = this.state.count;
        let result = a + 1;

        this.setState({
            count: result,
        });
    }

    decrementCount = () => {
        let a = this.state.count;
        let result = a - 1;

        this.setState({
            count: result,
        });
    }

    render() {
        return <div>
            <h4>Hello, {this.state.count} customer!</h4>
            <button onClick={this.incrementCount}>+1</button>
            <button onClick={this.decrementCount}>-1</button>
        </div>
    }
}

export default Counter;