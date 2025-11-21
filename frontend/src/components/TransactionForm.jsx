import { useState } from "react";

export default function TransactionForm({ addIncome, addExpense }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) return;

    if (type === "income") {
      addIncome({ amount: parseFloat(amount), description });
    } else {
      addExpense({ amount: parseFloat(amount), description });
    }

    setAmount("");
    setDescription("");
    setVisible(false);
  };

  return (
    <div className="form-section">
      <div className="controls">
        <button onClick={() => { setType("income"); setVisible(true); }}>
          Agregar ingreso
        </button>
        <button
          className="outline"
          onClick={() => { setType("expense"); setVisible(true); }}
        >
          Agregar gasto
        </button>
      </div>

      {visible && (
        <form className="form-box" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Descripción (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="actions">
            <button type="submit">Guardar</button>
            <button
              type="button"
              className="outline"
              onClick={() => setVisible(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
