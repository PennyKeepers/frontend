import { useState } from 'react';
import "../styles/transactions.css";

export default function RecurringBill({ onReturn }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [category, setCategory] = useState('0');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      bill_name: description,
      amount: parseFloat(amount),
      frequency,
      category: parseInt(category),
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/recurrent-bills/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Bill added successfully');
        setDescription('');
        setAmount('');
        setFrequency('weekly');
        setCategory('0');
        setStartDate('');
        setEndDate('');
      } else {
        console.error('Failed to add bill');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Recurring Bill</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter description"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="0">Utilities</option>
            <option value="1">House</option>
            <option value="2">Subscriptions</option>
            <option value="3">Car</option>
            <option value="4">Insurance</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 rounded border shadow bg-[#e0f7ff] text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full">
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