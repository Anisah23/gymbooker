import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TraineeForm.css";

function TraineeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/trainees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone_number, age }),
    }).then(() => navigate("/trainees"));
  };

  return (
    <div className="trainee-form">
      <h1>🙋 Become a Trainee</h1>
      <p className="catchphrase">“Commit today, see results tomorrow.”</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone Number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
}

export default TraineeForm;
