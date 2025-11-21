import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import { useTransactions } from "./hooks/useTransactions";
import "./styles/styles.css";

function App() {
  const {
    incomes,
    expenses,
    addIncome,
    addExpense,
    totals
  } = useTransactions();

  return (
    <>
      <Header />

      <div className="container">
        <TransactionForm
          addIncome={addIncome}
          addExpense={addExpense}
        />

        <Dashboard
          incomes={incomes}
          expenses={expenses}
          totals={totals}
        />
      </div>
    </>
  );
}

export default App;
