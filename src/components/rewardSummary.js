import React, { useMemo } from 'react';
import { calculateRewardPoints } from '../utils/calculateRewards';
import { REWARD_SUMMARY_HEADERS } from '../constants/constants';

const RewardSummary = ({ transactions }) => {
  const summary = useMemo(() => {
    const result = {};

    transactions.forEach(t => {
      const date = new Date(t.date);
      const key = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

      if (!result[key]) {
        result[key] = { total: 0, amount: 0 };
      }

      result[key].total += calculateRewardPoints(t.amount);
      result[key].amount += t.amount;
    });

    return result;
  }, [transactions]);

  return (
    <div>
      <h3>Monthly Reward Summary</h3>
      <table border="1">
        <thead>
          <tr>
            {REWARD_SUMMARY_HEADERS?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(summary).map(([month, data]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{data.total}</td>
              <td>${data.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardSummary;
