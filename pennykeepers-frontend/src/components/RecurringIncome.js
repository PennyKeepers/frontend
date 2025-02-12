import { useState } from 'react';
import "../styles/transactions.css";
import { API_URL } from "../config";

export default function RecurringIncome({ onReturn }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('Weekly');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can extend this later to handle the data
    console.log({
      description,
      amount: parseFloat(amount),
      frequency,
    });

    // Clear form fields after submission
    setDescription('');
    setAmount('');
    setFrequency('Weekly');
  };

  return (
    <div className="form-card">
      <h1 className="text-2xl font-bold mb-4">Add Recurring Income</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description */}
        <div>
          <label className="label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className="label">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            required
          />
        </div>

        {/* Frequency */}
        <div>
          <label className="label">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="input-field"
          >
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
          Submit
        </button>
      </form>

      {/* Return Button */}
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full mt-4"
        onClick={onReturn}
      >
        Return
      </button>
    </div>
  );
}
