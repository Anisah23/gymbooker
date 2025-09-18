import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SessionDetail.css";

function SessionDetail() {
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/sessions/${id}`)
      .then((res) => res.json())
      .then(setSession);
  }, [id]);

  if (!session) return <p>Loading...</p>;

  return (
    <div className="session-detail">
      <h1>Session on {session.day}</h1>
      <p><strong>Activity:</strong> {session.activity}</p>
      <p><strong>Trainer:</strong> {session.trainer}</p>
      <p><strong>Trainee:</strong> {session.trainee}</p>
    </div>
  );
}

export default SessionDetail;
