import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({transaction: {description}}) => <div>Transakcja pierwsza - {description}</div>;

TransactionCard.propTypes = {
    transaction: PropTypes.shape({
        description: PropTypes.string,
    }),
};

export default TransactionCard;