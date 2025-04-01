import logger from '../loggers/loggers';

export const fetchTransactions = () => {
  logger.info('fetchTransactions() initiated');
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch("/mock-data/transactions.json");
        logger.info('fetchTransactions() success');
        if (!res.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await res.json();
        resolve(data);
      } catch (error) {
        logger.error('fetchTransactions() failed');
        reject(error);
      }
    }, 1000);
  });
};
