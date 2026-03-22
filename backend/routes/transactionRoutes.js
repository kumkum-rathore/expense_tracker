const router = require("express").Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

router.get("/", getTransactions);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
