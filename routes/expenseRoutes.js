const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

router.post("/", async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    const expense = new Expense({
      title,
      amount,
      category,
      date,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
