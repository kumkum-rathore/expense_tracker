import axios from "axios";
import { Trash2, TrendingUp, TrendingDown } from "lucide-react";

const TransactionList = ({ transactions, fetchData }) => {
  const deleteTx = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
        fetchData();
      } catch (error) {
        alert("Failed to delete transaction");
        console.error(error);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Transaction History</h2>
      
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">No transactions yet. Add one to get started!</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="space-y-2">
            {transactions.map((t) => (
              <div
                key={t._id}
                className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
                  t.type === "income"
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500"
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`p-2 rounded-full ${
                    t.type === "income" ? "bg-green-100 dark:bg-green-900/40" : "bg-red-100 dark:bg-red-900/40"
                  }`}>
                    {t.type === "income" ? (
                      <TrendingUp className={`w-5 h-5 ${t.type === "income" ? "text-green-600" : "text-red-600"}`} />
                    ) : (
                      <TrendingDown className={`w-5 h-5 ${t.type === "income" ? "text-green-600" : "text-red-600"}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-white">{t.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(t.createdAt)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`font-bold text-lg ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}>
                    {t.type === "income" ? "+" : "-"}₹{t.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => deleteTx(t._id)}
                    className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition duration-200"
                    title="Delete transaction"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;