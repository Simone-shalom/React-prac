// CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY']; // Add more currencies as needed

  const fixedRates = [
    { from: 'USD', to: 'EUR', rate: 0.85 },
    { from: 'USD', to: 'GBP', rate: 0.74 },
    { from: 'USD', to: 'JPY', rate: 110.16 },
    { from: 'EUR', to: 'USD', rate: 1.18 },
    { from: 'EUR', to: 'GBP', rate: 0.87 },
    { from: 'EUR', to: 'JPY', rate: 130.25 },
    // Add more rates as needed
  ];

  const findRate = (from, to) => {
    const rate = fixedRates.find((r) => r.from === from && r.to === to);
    return rate ? rate.rate : 1; // Default to 1 if rate not found
  };

  const convertedAmount = (amount / findRate(fromCurrency, toCurrency) * findRate(toCurrency, fromCurrency)).toFixed(2);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From Currency:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To Currency:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p>
        {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
