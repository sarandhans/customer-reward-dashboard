export const getLast3MonthsKeys = () => {
    const months = [];
    const today = new Date();
  
    for (let i = 0; i < 3; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const key = date.toISOString().slice(0, 7); 
      months.push(key);
    }
  
    return months;
  };
  