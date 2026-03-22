const Balance = ({ transactions }) => {
  const amounts = transactions.map(t => t.type === "expense" ? -t.amount : t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">TOTAL BALANCE</p>
        <p className={`text-3xl font-bold ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ₹{total.toFixed(2)}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">INCOME</p>
        <p className="text-3xl font-bold text-green-600">
          ₹{income.toFixed(2)}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-red-500">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">EXPENSE</p>
        <p className="text-3xl font-bold text-red-600">
          ₹{expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Balance;