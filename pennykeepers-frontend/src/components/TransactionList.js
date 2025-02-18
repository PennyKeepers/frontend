import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/transactions.css";

export default function TransactionList({ onReturn }) {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState('+');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/transactions/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      date,
      description,
      category,
      is_income: type === '+',
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/transactions/', newTransaction, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setTransactions([response.data, ...transactions]);
      setType('+');
      setDate('');
      setAmount('');
      setDescription('');
      setCategory('');
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <div className="form-card">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="input-field">
            <option value="+">Income (+)</option>
            <option value="-">Expense (-)</option>
          </select>
        </div>

        <div>
          <label className="label">Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-field" required />
        </div>

        <div>
          <label className="label">Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="input-field" required />
        </div>

        <div>
          <label className="label">Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="input-field" />
        </div>

        <div>
          <label className="label">Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="input-field" />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <h2 className="text-xl font-semibold mt-4">Transaction List</h2>
      <ul className="transaction-list mt-2 space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`transaction-item ${transaction.is_income ? 'text-green-600' : 'text-red-600'}`}>
            {transaction.is_income ? '+' : '-'} ${transaction.amount.toFixed(2)} - {transaction.date} ({transaction.description} - {transaction.category})
          </li>
        ))}
      </ul>

      <button className="return-button" onClick={onReturn}>Return</button>
    </div>
  );
}
