import React from 'react';
import { MONTHS, YEARS, MONTH, YEAR, MONTH_LABELS } from '../constants/constants';
const Filters = ({ selectedMonth, selectedYear, onMonthChange, onYearChange }) => {
  const handleMonthChange = (e) => {
    onMonthChange(e.target.value);
  };

  const handleYearChange = (e) => {
    onYearChange(e.target.value);
  };
 return (
    <div>
      <span>
        <label>{MONTH}</label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          {MONTHS.map(month => (
            <option key={month} value={month}> {MONTH_LABELS[month] || month}</option>
          ))}
        </select>
      </span>

      <span>
        <label>{YEAR} </label>
        <select value={selectedYear} onChange={handleYearChange}>
          {YEARS.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default Filters;
