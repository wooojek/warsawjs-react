import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App2(props) {
    return <button onClick={props.func}> {props.name}</button>
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            lista: ["a", "b", "c"]
        }
    }

    klikam = () => {
        this.setState({counter: this.state.counter + 1},
            () => {
                console.log(this.state.counter);
            })

    }

    render() {
        console.log(this.props);
        const name = "Ania";
        let ul = this.state.lista.map((e) => {
            return <li key={e}>{e}</li>
        });
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    Hi {this.props.name}, {this.state.counter}
                </p>
                <button onClick={this.klikam}>
                    tutaj
                </button>
                <App2 name={this.props.name} func={this.klikam}/>
                <div>{this.state.lista}</div>
                <ul>{ul}</ul>
            </div>
        );
    }
}

export default App;