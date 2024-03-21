import React, { useState } from 'react';
import './SipCalculator.css';

function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [futureValue, setFutureValue] = useState('');

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const years = parseFloat(investmentPeriod);
    const r = parseFloat(annualReturn) / 100 / 12; // Convert annual rate to monthly and into decimal
    const n = years * 12; // Convert years to months

    const FV = P * (((1 + r) ** n - 1) / r) * (1 + r);
    setFutureValue(FV.toFixed(2));
  };

  return (
    <div className='sipcalculator'>
      <h2>SIP Calculator</h2>
      <label>
        Monthly Investment:
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </label>
      <br />
      <label>
        Investment Period (in years):
        <input
          type="number"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
        />
      </label>
      <br />
      <label>
        Expected Annual Return Rate (%):
        <input
          type="number"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateSIP}>Calculate</button>
      <div className='results'>
      <h3>Results</h3>
      <p>Future Value: {futureValue}</p>
    </div>
</div>
  );
}

export default SipCalculator;
