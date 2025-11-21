import { useState } from "react";

export function useTransactions() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function addIncome(newIncome) {
    setIncomes([...incomes, newIncome]);
  }

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  const totals = {
    incomes: incomes.reduce((sum, x) => sum + x.amount, 0),
    expenses: expenses.reduce((sum, x) => sum + x.amount, 0),
  };

  return {
    incomes,
    expenses,
    addIncome,
    addExpense,
    totals,
  };
}
