import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js';
import Stateless from "./components/stateless";
import Stateful from "./components/stateful";
import TransactionCard from "./components/transactionCard";
import TransactionList from "./components/transactionList";
import TransactionForm from "./components/transactionForm";

function App2(props) {
    return <button onClick={props.func}> {props.name}</button>
}

const transactions = [
    {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
    },
    {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
    },
    {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // counter: 5,
            // lista: ["a", "b", "c"],
            // name: "Ryszard",
            transactions: transactions,
        }
    }

    removeTransaction = ({ id }) => {
        const temp = this.state.transactions.slice();

        const results = temp.filter(item => item.id !== id);

        this.setState({
            transactions: results,
        });
    }

    handleSubmit = (newRecord) => {
        const { transactions } = this.state;
        const lastIndex = this.state.transactions[transactions.length-1].id;

        this.setState({
            transactions: [
                ...transactions,
                { id: lastIndex + 1, ...newRecord }
            ]
        });
    }

    render() {
        // const transaction = this.state.transactions[0];
        // const { description } = this.state.transactions[1];
        const { transactions } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    Hi {this.props.name}!
                </p>
                <TransactionForm handleSubmit={this.handleSubmit}/>
                <TransactionList transactions={transactions} onRemoveTransaction={this.removeTransaction}/>
            </div>
        );
    }


    //
    // klikam = () => {
    //     this.setState({counter: this.state.counter + 1},
    //         () => {
    //             console.log(this.state.counter);
    //         })
    //
    // };

    //
    // render() {
    //     console.log(this.state);
    //     const {name} = this.state;
    //     return (
    //         <div className="App">
    //             <div className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo"/>
    //                 <h2>Welcome to React</h2>
    //             </div>
    //             <p className="App-intro">
    //                 Hi {this.props.name}!
    //             </p>
    //             <button onClick={this.klikam}>+1</button>
    //             <counter count={this.state.counter}/>
    //             <Stateless name={name}/>
    //             <Stateful name={name}/>
    //         </div>
    //     );
    // }
}

export default App;