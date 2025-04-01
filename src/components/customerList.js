import React from 'react';
import PropTypes from 'prop-types';
import { SELECT_CUSTOMER_NAME,SELECTED_OPTION } from '../constants/constants';

const CustomerList = ({ customers, onSelect }) => (
  <>
    <label> {SELECT_CUSTOMER_NAME}</label>
    <select onChange={e => onSelect(e.target.value)}>
      <option value="">{SELECTED_OPTION}</option>
      {customers.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  </>
);

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;