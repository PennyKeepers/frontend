import { useState } from 'react';
import "../styles/transactions.css";

export default function RecurringBill({ onReturn }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('Weekly');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      description,
      amount: parseFloat(amount),
      frequency,
    });

    setDescription('');
    setAmount('');
    setFrequency('Weekly');
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
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
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
