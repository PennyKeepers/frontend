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
                    <div className="text-section">
                        <h1>Welcome to Your Dashboard</h1>
                        <p>Manage your financial data easily with Penny Keepers.<p></p>
                            Use the options on the right to manage your finances efficiently as registering your transactions, recurring income and bills.
                        </p>
                    </div>
                )}
                {view === "menu" && (
                    <div className="buttons-container">
                        <button onClick={() => setView("transaction")} className="dashboard-btn transactions">
                            Transactions
                        </button>

                        <button onClick={() => setView("recurringIncome")} className="dashboard-btn income">
                            Recurring Income
                        </button>

                        <button onClick={() => setView("recurringBill")} className="dashboard-btn bill">
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


