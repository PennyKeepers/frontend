import { useState } from 'react';
import axios from 'axios';
import '../styles/transactions.css';

export default function RecurringIncome({ onReturn }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('0'); // 0 = Weekly, 1 = Biweekly, etc.
  const [incomeType, setIncomeType] = useState('1'); // 1 = Salary, 0 = Hourly
  const [yearlySalary, setYearlySalary] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [avgHoursPerWeek, setAvgHoursPerWeek] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description,
      amount: parseFloat(amount),
      frequency: parseInt(frequency, 10),
      income_type: parseInt(incomeType, 10),
      yearly_salary: yearlySalary ? parseFloat(yearlySalary) : null,
      hourly_rate: hourlyRate ? parseFloat(hourlyRate) : null,
      avg_hours_per_week: avgHoursPerWeek ? parseFloat(avgHoursPerWeek) : null,
      start_date: startDate,
      end_date: endDate || null,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/recurrent-incomes/', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Recurrent income created:', response.data);
      // Clear form
      setDescription('');
      setAmount('');
      setFrequency('0');
      setIncomeType('1');
      setYearlySalary('');
      setHourlyRate('');
      setAvgHoursPerWeek('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error creating recurrent income:', error.response?.data || error.message);
    }
  };

  return (
    <div className="form-card">
      <h1 className="text-2xl font-bold mb-4">Add Recurring Income</h1>
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
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="input-field">
            <option value="0">Weekly</option>
            <option value="1">Biweekly</option>
            <option value="2">Monthly</option>
            <option value="3">Yearly</option>
          </select>
        </div>

        <div>
          <label className="label">Income Type</label>
          <select value={incomeType} onChange={(e) => setIncomeType(e.target.value)} className="input-field">
            <option value="0">Hourly</option>
            <option value="1">Salary</option>
          </select>
        </div>

        {incomeType === '1' && (
          <div>
            <label className="label">Yearly Salary ($)</label>
            <input
              type="number"
              value={yearlySalary}
              onChange={(e) => setYearlySalary(e.target.value)}
              className="input-field"
            />
          </div>
        )}

        {incomeType === '0' && (
          <>
            <div>
              <label className="label">Hourly Rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="label">Average Hours per Week</label>
              <input
                type="number"
                value={avgHoursPerWeek}
                onChange={(e) => setAvgHoursPerWeek(e.target.value)}
                className="input-field"
              />
            </div>
          </>
        )}

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

        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
          Submit
        </button>
      </form>

      <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full mt-4" onClick={onReturn}>
        Return
      </button>
    </div>
  );
}