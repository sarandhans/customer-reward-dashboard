import React from 'react';
import { MONTHS, YEARS, MONTH, YEAR } from '../constants/constants';
const Filters = ({ selectedMonth, selectedYear, onMonthChange, onYearChange }) => {

 return (
    <div>
      <span>
        <label>{MONTH}</label>
        <select value={selectedMonth} onChange={e => onMonthChange(e.target.value)}>
          {MONTHS.map(month => (
            <option key={month} value={month}>  {month === 'last-3' ? 'Last 3 Months' : month}</option>
          ))}
        </select>
      </span>

      <span>
        <label>{YEAR} </label>
        <select value={selectedYear} onChange={e => onYearChange(e.target.value)}>
          {YEARS.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default Filters;
