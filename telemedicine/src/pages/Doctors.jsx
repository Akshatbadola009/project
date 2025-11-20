import "./Doctors.css";

export default function Doctors() {
  const doctors = [
    { id: 1, name: "Dr. Rohan Sharma", speciality: "Cardiologist" },
    { id: 2, name: "Dr. Priya Gupta", speciality: "Dermatologist" },
    { id: 3, name: "Dr. Amit Rao", speciality: "Neurologist" },
  ];

  return (
    <div className="container">
      <h2 className="page-title">Available Doctors 👨‍⚕️</h2>

      <div className="doctor-list">
        {doctors.map((doc) => (
          <div className="card doctor-card" key={doc.id}>
            <h3>{doc.name}</h3>
            <p>{doc.speciality}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
