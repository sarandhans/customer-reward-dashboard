import logger from '../loggers/loggers';

export const fetchTransactions = async () => {
  logger.info('fetchTransactions() initiated');

  try {
    const res = await fetch("/mock-data/transactions.json");

    if (!res.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await res.json();
    logger.info('fetchTransactions() success');
    return data;
  } catch (error) {
    logger.error('fetchTransactions() failed', error);
    throw error;
  }
};
