import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransactionList from "../components/TransactionList";
import RecurringIncome from "../components/RecurringIncome";
import RecurringBill from "../components/RecurringBill";
import "../styles/dashboard.css";
import "../styles/transactions.css";

const Dashboard = ({ setPage }) => {
  const [view, setView] = useState("menu");

  return (
    <div className="dashboard-container">
      <Navbar setPage={setPage} />

      <div className="content-center">
        {view === "menu" && (
            <>
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your financial data easily with Penny Keepers.</p>
            </>
        )}

        {view === "menu" && (
          <div className="flex flex-col space-y-4 mt-6">
            <button
              onClick={() => setView("transaction")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Transactions
            </button>

            <button
              onClick={() => setView("recurringIncome")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Recurring Income
            </button>

            <button
              onClick={() => setView("recurringBill")}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Recurring Bill
            </button>
          </div>
        )}

        {view === "transaction" && <TransactionList onReturn={() => setView("menu")} />}

        {view === "recurringIncome" && <RecurringIncome onReturn={() => setView("menu")} />}

        {view === "recurringBill" && <RecurringBill onReturn={() => setView("menu")} />}

      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
