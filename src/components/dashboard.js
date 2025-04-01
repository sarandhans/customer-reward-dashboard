import React, { useMemo, useState } from 'react';
import useTransactions from '../hooks/useTransactions';
import CustomerList from './customerList';
import Filters from './filters';
import RewardSummary from '../../src/components/rewardSummary';
import { getLast3MonthsKeys } from '../utils/dateUtils';
import TransactionTable from '../../src/components/transactionTable';
import {
  SpinnerWrapper,
  SpinnerCircle,
  SectionMargin,
  PageWrapper
} from '../styles/globalStyles'; 
import {
  DEFAULT_MONTH,
  DEFAULT_YEAR,
  Heading
} from '../constants/constants'
const Dashboard = () => {
  
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(DEFAULT_MONTH);
  const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
  const { transactions, loading, error } = useTransactions();

  const customers = useMemo(() => {
    const map = new Map();
    transactions.forEach(t => {
      if (!map.has(t.customerId)) {
        map.set(t.customerId, t.customerName);
      }
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [transactions]);

  const customerTransactions = useMemo(() => {
    return transactions.filter(t => t.customerId === selectedCustomer);
  }, [transactions, selectedCustomer]);
  
  const last3Months = getLast3MonthsKeys();

  const filteredTransactions = useMemo(() => {
    return customerTransactions.filter(t => {
      const date = t.date.slice(0, 7); 
      
      if (selectedMonth === 'last-3') {
        return last3Months.includes(date);
      }
  
      const matchesYear = t.date.startsWith(selectedYear);
      const matchesMonth = t.date.slice(5, 7) === selectedMonth;
      return matchesYear && matchesMonth;
    });
  }, [customerTransactions, selectedMonth, selectedYear]);

  return (
    <PageWrapper>
       {loading && (
    <SpinnerWrapper>
      <SpinnerCircle />
      <p>Loading...</p>
    </SpinnerWrapper>
     )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          <h2>{Heading}</h2>
          <CustomerList customers={customers} onSelect={setSelectedCustomer} />
          {selectedCustomer && (
            <>
           <SectionMargin>
              <Filters 
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onMonthChange={setSelectedMonth}
                onYearChange={setSelectedYear}
              />
           </SectionMargin>
              <RewardSummary transactions={customerTransactions} />
              <TransactionTable transactions={filteredTransactions} 
              />
            </>
          )}
        </>
      )}
   </PageWrapper>
  );
};

export default Dashboard;