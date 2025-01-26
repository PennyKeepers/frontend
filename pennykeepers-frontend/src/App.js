import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PennyKeepers</h1>
        <p>Your Personal Finance Tracker</p>
        <p>
          Take control of your finances with PennyKeepers! Track your assets, liabilities,
          income, and expenses in one easy-to-use application.
        </p>
        <div className="Features">
          <h2>Features:</h2>
          <ul>
            <li><strong>Real-Time Net Worth Calculation</strong>: Stay updated with your financial status.</li>
            <li><strong>Income Tracking</strong>: Monitor passive and active income streams.</li>
            <li><strong>Visual Reports</strong>: Understand your spending habits with easy-to-read charts.</li>
          </ul>
        </div>
        <div className="Call-to-Action">
          <p>
            Ready to get started? Let PennyKeepers simplify your financial journey today!
          </p>
          <button onClick={() => alert("Sign Up clicked!")}>Sign Up</button>
          <button onClick={() => alert("Learn More clicked!")}>Learn More</button>
        </div>
      </header>
    </div>
  );
}

export default App;