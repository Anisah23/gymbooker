import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SessionForm.css";

function SessionForm() {
  const [day, setDay] = useState("");
  const [activity, setActivity] = useState("");
  const [trainer_id, setTrainerId] = useState("");
  const [trainee_id, setTraineeId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ day, activity, trainer_id, trainee_id }),
    }).then(() => navigate("/sessions"));
  };

  return (
    <div className="session-form">
      <h1>📅 Schedule a Session</h1>
      <p className="catchphrase">“A plan today is progress tomorrow.”</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Day (e.g. Monday)" value={day} onChange={(e) => setDay(e.target.value)} required />
        <input type="text" placeholder="Activity" value={activity} onChange={(e) => setActivity(e.target.value)} required />
        <input type="number" placeholder="Trainer ID" value={trainer_id} onChange={(e) => setTrainerId(e.target.value)} required />
        <input type="number" placeholder="Trainee ID" value={trainee_id} onChange={(e) => setTraineeId(e.target.value)} required />
        <button type="submit">Create Session</button>
      </form>
    </div>
  );
}

export default SessionForm;
