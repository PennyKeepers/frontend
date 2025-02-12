import { useState } from 'react';
import "../styles/transactions.css";

export default function TransactionList({ onReturn }) {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState('+');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { type, date, amount: parseFloat(amount) };
    setTransactions([newTransaction, ...transactions]);
    setType('+');
    setDate('');
    setAmount('');
  };

  return (
    <div className="form-card">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-field"
          >
            <option value="+">Positive (+)</option>
            <option value="-">Negative (-)</option>
          </select>
        </div>

        <div>
          <label className="label">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="label">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-4">Transaction List</h2>
      <ul className="transaction-list mt-2 space-y-2">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`transaction-item ${transaction.type === '+' ? 'text-green-600' : 'text-red-600'}`}
          >
            {transaction.type} ${transaction.amount.toFixed(2)} - {transaction.date}
          </li>
        ))}
      </ul>

      <button className="return-button" onClick={onReturn}>
        Return
      </button>
    </div>
  );
}
