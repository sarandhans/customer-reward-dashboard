import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { calculateRewardPoints } from '../utils/calculateRewards';
import { MONTHLY_REWARD_SUMMARY } from '../constants/constants';

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

  const chartData = useMemo(() => {
    return Object.entries(summary).map(([month, data]) => {
      const formattedMonth = new Date(month).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });

      return {
        month: formattedMonth,
        points: data.total,
        spent: data.amount
      };
    });
  }, [summary]);

  return (
    <div>
      <h3>{MONTHLY_REWARD_SUMMARY}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="points" name="Points" fill="#8884d8" />
          <Bar dataKey="spent" name="Spent" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RewardSummary;
