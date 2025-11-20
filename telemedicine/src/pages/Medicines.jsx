import "./Medicines.css";

export default function Medicines() {
  const medicines = [
    { id: 1, name: "Paracetamol", price: 50 },
    { id: 2, name: "Amoxicillin", price: 120 },
    { id: 3, name: "Cough Syrup", price: 90 }
  ];

  return (
    <div className="container">
      <h2 className="page-title">Medicines 💊</h2>

      <div className="medicine-list">
        {medicines.map((med) => (
          <div className="card medicine-card" key={med.id}>
            <h3>{med.name}</h3>
            <p>₹{med.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
