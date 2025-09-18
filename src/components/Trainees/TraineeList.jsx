import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TraineeList.css";

function TraineeList() {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/trainees")
      .then((res) => res.json())
      .then(setTrainees);
  }, []);

  return (
    <div className="trainee-list">
      <h1>🙋 Join Our Gym Family</h1>
      <p className="catchphrase">“The journey of a thousand reps begins with a single step.”</p>
      <Link to="/trainees/new" className="add-btn">➕ Become a Trainee</Link>
      <ul>
        {trainees.map((trainee) => (
          <li key={trainee.id}>
            <Link to={`/trainees/${trainee.id}`}>{trainee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TraineeList;
