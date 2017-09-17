import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transactionCard'

const TransactionList = ({transactions, onRemoveTransaction}) => (
    <ul>
        {transactions.map(item => (<TransactionCard transaction={item} onRemoveTransaction={onRemoveTransaction}/>))}
    </ul>
);

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired,
};

export default TransactionList;