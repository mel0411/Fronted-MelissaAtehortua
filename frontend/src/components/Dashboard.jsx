import ChartCard from "./ChartCard";

export default function Dashboard({ incomes, expenses, totals }) {
  return (
    <section className="dashboard">
      <ChartCard totals={totals} />

      <div className="cards">
        <div className="card">
          <h3>Ingresos</h3>
          <p>${totals.incomes.toFixed(2)}</p>
        </div>

        <div className="card">
          <h3>Gastos</h3>
          <p>${totals.expenses.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}
