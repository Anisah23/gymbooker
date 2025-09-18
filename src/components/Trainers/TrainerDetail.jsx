import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TrainerDetail.css";

function TrainerDetail() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/trainers/${id}`)
      .then((res) => res.json())
      .then(setTrainer);
  }, [id]);

  if (!trainer) return <p>Loading...</p>;

  return (
    <div className="trainer-detail">
      <h1>{trainer.name}</h1>
      <p><strong>Bio:</strong> {trainer.bio}</p>
      <p><strong>Specialization:</strong> {trainer.specialization}</p>
      <p><strong>Phone:</strong> {trainer.phone_number}</p>
      <p><strong>Sessions:</strong> {trainer.sessions.join(", ") || "No sessions yet"}</p>
    </div>
  );
}

export default TrainerDetail;
