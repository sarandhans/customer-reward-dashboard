//Reward Summary
export const REWARD_SUMMARY_HEADERS = Object.freeze(['Month', 'Total Points', 'Total Spent']);
export const MONTHLY_REWARD_SUMMARY = "Reward Summary: All Months"

//Customer List
export const SELECT_CUSTOMER_NAME = "Select Customer Name  ";
export const SELECTED_OPTION = "-- Select --";

//Dashboard
export const Heading = "Customer Rewards Dashboard";
export const DEFAULT_MONTH = 'last-3';
export const DEFAULT_YEAR = '2025';

//Filters
export const MONTHS = Object.freeze([ 'last-3', 
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ]);
  export const MONTH_LABELS = {
    'last-3': 'Last 3 Months',
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };
export const YEARS = Object.freeze(['2025', '2024']);
export const MONTH = "Month ";
export const YEAR = "Year ";

//transactionTable
export const DEFAULT_PAGE = 1;
export const TRANSACTION_HEADERS =Object.freeze(['Transaction ID','Amount','Date',"Points"]);
export const DEFAULT_ROW_PERPAGE = 5;
