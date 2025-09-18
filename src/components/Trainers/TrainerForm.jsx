import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainerForm.css";

function TrainerForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/trainers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, bio, specialization, phone_number }),
    }).then(() => navigate("/trainers"));
  };

  return (
    <div className="trainer-form">
      <h1>👨‍🏫 Become a Trainer</h1>
      <p className="catchphrase">“Inspire, coach, transform — your journey starts here.”</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Short Bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
        <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default TrainerForm;
