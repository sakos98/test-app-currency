import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCasesPLN = [
  { amount: '100', expected: 'PLN 100.00 = $28.57' },
  { amount: '20', expected: 'PLN 20.00 = $5.71' },
  { amount: '200', expected: 'PLN 200.00 = $57.14' },
  { amount: '345', expected: 'PLN 345.00 = $98.57' },
];

const testCasesUSD = [
  { amount: '100', expected: '$100.00 = PLN 350.00' },
  { amount: '150', expected: '$150.00 = PLN 525.00' },
  { amount: '200', expected: '$200.00 = PLN 700.00' },
  { amount: '345', expected: '$345.00 = PLN 1,207.50' },
];

const testCasesPLNToPLN = [
  { amount: '350', expected: 'PLN 350.00 = PLN 350.00' },
  { amount: '525', expected: 'PLN 525.00 = PLN 525.00' },
  { amount: '700', expected: 'PLN 700.00 = PLN 700.00' },
  { amount: '1207', expected: 'PLN 1,207.00 = PLN 1,207.00' },
];

const testCasesUSDToUSD = [
  { amount: '100', expected: '$100.00 = $100.00' },
  { amount: '150', expected: '$150.00 = $150.00' },
  { amount: '200', expected: '$200.00 = $200.00' },
  { amount: '345', expected: '$345.00 = $345.00' },
];

describe('Component ResultBox', () => {

  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {

    for (const testObj of testCasesPLN) {
      render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.expected);
      cleanup();
    }
  });

  it('should render proper info about conversion when USD -> PLN', () => {

    for (const testObj of testCasesUSD) {
      render(<ResultBox from="USD" to="PLN" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.expected);
      cleanup();
    }
  });

  it('should render proper info about conversion when PLN -> PLN', () => {

    for (const testObj of testCasesPLNToPLN) {
      render(<ResultBox from="PLN" to="PLN" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.expected);
      cleanup();
    }
  });

  it('should render proper info about conversion when USD -> USD', () => {

    for (const testObj of testCasesUSDToUSD) {
      render(<ResultBox from="USD" to="USD" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.expected);
      cleanup();
    }
  });
});