import { useEffect, useState } from "react";
import axios from "axios";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5000/api/transactions");
      setTransactions(res.data);
    } catch (err) {
      setError("Failed to fetch transactions. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            💰 Expense Tracker
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your finances efficiently
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading transactions...</p>
          </div>
        ) : (
          <>
            {/* Balance Cards */}
            <Balance transactions={transactions} />

            {/* Add Transaction Form */}
            <TransactionForm fetchData={fetchData} />

            {/* Transaction List */}
            <TransactionList transactions={transactions} fetchData={fetchData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;