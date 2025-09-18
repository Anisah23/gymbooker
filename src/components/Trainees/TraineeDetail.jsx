import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TraineeDetail.css";

function TraineeDetail() {
  const { id } = useParams();
  const [trainee, setTrainee] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/trainees/${id}`)
      .then((res) => res.json())
      .then(setTrainee);
  }, [id]);

  if (!trainee) return <p>Loading...</p>;

  return (
    <div className="trainee-detail">
      <h1>{trainee.name}</h1>
      <p><strong>Email:</strong> {trainee.email}</p>
      <p><strong>Phone:</strong> {trainee.phone_number}</p>
      <p><strong>Age:</strong> {trainee.age}</p>
      <p><strong>Sessions:</strong> {trainee.sessions.join(", ") || "No sessions yet"}</p>
    </div>
  );
}

export default TraineeDetail;
