import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartCard({ totals }) {
  const data = {
    labels: ["Ingresos", "Gastos"],
    datasets: [
      {
        data: [totals.incomes, totals.expenses],
        backgroundColor: ["#FFDCE8", "#FEFDD0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="chart-card">
      <Doughnut data={data} />
    </div>
  );
}
