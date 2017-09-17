import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class TransactionForm extends Component {
    state = {
        description: "",
        value: "",
        date: "",
        category: "",
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const {description, value, date, category} = this.state;

        console.log(this.state);

        this.props.handleSubmit({
            description,
            value,
            date,
            category,
        });
    }

    handleInputChange = (key, value) => {
        this.setState({
            [key]: value,
        });
    }

    render() {
        const {description, value, date, category} = this.state;

        return (<form onSubmit={this.onSubmitForm}>
                <Input name='description'
                       placeholder='Description'
                       value={description}
                       onChange={this.handleInputChange}
                />
                <Input name='value'
                       placeholder='Value'
                       value={value}
                       onChange={this.handleInputChange}
                />
                <Input name='date'
                       placeholder='Date'
                       value={date}
                       onChange={this.handleInputChange}
                />
                <Input name='category'
                       placeholder='Category'
                       value={category}
                       onChange={this.handleInputChange}
                />
                <button>Dodaj</button>
            </form>
        )
    }
}

export default TransactionForm;