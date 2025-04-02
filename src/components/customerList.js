import React from 'react';
import PropTypes from 'prop-types';
import { SELECT_CUSTOMER_NAME, SELECTED_OPTION } from '../constants/constants';

const CustomerList = ({ customers, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <label>{SELECT_CUSTOMER_NAME}</label>
      <select onChange={handleChange}>
        <option value="">{SELECTED_OPTION}</option>
        {customers.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    </>
  );
};

const customerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(customerShape).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;
