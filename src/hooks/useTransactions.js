import { useEffect, useState } from 'react';
import { fetchTransactions } from './fetchTransactions';
import logger from '../loggers/loggers';

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTransactions = async () => {
      setLoading(true); 
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        logger.info('Transactions fetched successfully');
      } catch (error) {
        logger.error('Error fetching transactions:', error);
      } finally {
        setLoading(false); 
      }
    };

    loadTransactions();
  }, []);

  return { transactions, loading };
};

export default useTransactions;
