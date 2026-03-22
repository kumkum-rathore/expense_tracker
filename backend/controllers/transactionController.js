const Transaction = require("../models/Transaction");

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const data = await Transaction.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, type } = req.body;

    // Validation
    if (!title || !amount || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }

    if (!["income", "expense"].includes(type)) {
      return res.status(400).json({ error: "Invalid transaction type" });
    }

    const newTx = new Transaction({ title, amount, type });
    const saved = await newTx.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deleted = await Transaction.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};