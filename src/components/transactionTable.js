import React, { useState,useMemo, useEffect  } from 'react';
import { calculateRewardPoints } from '../utils/calculateRewards';
import { TRANSACTION_HEADERS } from '../constants/constants';
import { Button, PaginationWrapper } from '../styles/globalStyles';
import {DEFAULT_PAGE,DEFAULT_ROW_PERPAGE} from '../constants/constants'
const TransactionTable = ({ transactions }) => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  useEffect(() => {
    setPage(DEFAULT_PAGE); 
  }, [transactions]);

  const ROWSPERPAGE = DEFAULT_ROW_PERPAGE;
  const totalPages = useMemo(() => {
    return Math.ceil(transactions.length / ROWSPERPAGE);
  }, [transactions.length]);

  const currentData = useMemo(() => {
    return transactions.slice((page - 1) * ROWSPERPAGE, page * ROWSPERPAGE);
  }, [transactions, page]);

  const memoizedTableRows = useMemo(() => {
    return currentData.map((t, index) => (
      <tr key={`${t.transactionId}-${index}`}>
        <td>{t.transactionId}</td>
        <td>${t.amount.toFixed(2)}</td>
        <td>{t.date}</td>
        <td>{calculateRewardPoints(t.amount)}</td>
      </tr>
    ));
  }, [currentData]);

  const handlePrev = () => {
    setPage((p) => p - 1);
  };
  
  const handleNext = () => {
    setPage((p) => p + 1);
  };
  
  return (
    <>
      <h3>Transaction Details</h3>
      {transactions.length === 0 ? (
        <p>No transactions found for this filter.</p>
      ) : (
        <>
          <table border="1">
            <thead>
              <tr>
               {TRANSACTION_HEADERS?.map((header,index)=>(
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>{memoizedTableRows}</tbody>
          </table>
          <PaginationWrapper>
            Page: {page} / {totalPages}
            <Button disabled={page === DEFAULT_PAGE}  onClick={handlePrev}>Prev</Button>
            <Button disabled={page >=totalPages} onClick={handleNext}>Next</Button>
            </PaginationWrapper>
        </>
      )}
    </>
  );
};

export default TransactionTable;