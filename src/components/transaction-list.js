import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';
import TransactionForm from './transaction-form';

const TransactionList = ({ items, category, onRemoveTransaction, onAddTransaction, onSetCategory }) => (
  <div>
    <TransactionForm onSubmit={onAddTransaction} />
    {items.map(item => {
        if (category === 0) {
            return <TransactionCard
                key={item.id}
                item={item}
                onRemoveTransaction={onRemoveTransaction}
            />
        } else if (item.category === category) {
            return <TransactionCard
                key={item.id}
                item={item}
                onRemoveTransaction={onRemoveTransaction}
            />
        }
    })}
  </div>
);

TransactionList.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionList;
