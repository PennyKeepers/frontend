import { useState } from 'react';
import '../styles/transactions.css';

export default function RecurringBill({ onReturn }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [category, setCategory] = useState('0');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      bill_name: description,
      amount: parseFloat(amount),
      frequency,
      category: parseInt(category, 10),
      start_date: startDate,
      end_date: endDate || null,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_URL}/api/recurrent-bills/`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log('Recurrent bill created successfully');
        // Reset form
        setDescription('');
        setAmount('');
        setFrequency('weekly');
        setCategory('0');
        setStartDate('');
        setEndDate('');
      } else {
        const errorData = await response.json();
        console.error('Failed to create recurrent bill:', errorData);
      }
    } catch (error) {
      console.error('Error creating recurrent bill:', error);
    }
  };

  return (
    <div className="form-card">
      <h1 className="text-2xl font-bold mb-4">Add Recurring Bill</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div>
          <label className="label">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="input-field"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label className="label">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            <option value="0">Utilities</option>
            <option value="1">House</option>
            <option value="2">Subscriptions</option>
            <option value="3">Car</option>
            <option value="4">Insurance</option>
          </select>
        </div>

        <div>
          <label className="label">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="label">End Date (optional)</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>

      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full mt-4"
        onClick={onReturn}
      >
        Return
      </button>
    </div>
  );
}
