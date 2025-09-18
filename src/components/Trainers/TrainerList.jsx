import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TrainerList.css";

function TrainerList() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/trainers")
      .then((res) => res.json())
      .then(setTrainers);
  }, []);

  return (
    <div className="trainer-list">
      <h1>💪 Meet Our Elite Trainers</h1>
      <p className="catchphrase">“Every champion was once a trainee who refused to quit.”</p>
      <Link to="/trainers/new" className="add-btn">➕ Become a Trainer</Link>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            <Link to={`/trainers/${trainer.id}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerList;
