import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f8f9fa;
    color: #333;
    padding: 2rem;
    font-size: 18px; 
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    background-color: #0077cc;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 1.5rem;
  }
 h3{
 padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
 }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    font-size: 1.1rem; 
  }

  th, td {
    padding: 1rem;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #0077cc;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  select, button, input {
    font-size: 1rem; 
  }

  p {
    font-size: 1.1rem;
  }
    div > span {
    margin-right: 1rem;
    display: inline-block;
  }
      @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


export default GlobalStyle;

export const SectionMargin = styled.div`
  margin-top: 2rem;
`;

export const FiltersWrapper = styled.div`
  margin-top: 2rem;
`;
export const SpinnerWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const SpinnerCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
`;
export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

export const PaginationWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  margin: 0 0.5rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #005fa3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;