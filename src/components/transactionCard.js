import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({transaction: {id, description, value, date, category}, onRemoveTransaction}) => <li>Transakcja {id} - {description} - {value} - {date} - {category} <div onClick={() => onRemoveTransaction({id})}>&times;</div></li>;

export default TransactionCard;