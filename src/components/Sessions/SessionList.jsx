import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SessionList.css";

function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/sessions")
      .then((res) => res.json())
      .then(setSessions);
  }, []);

  return (
    <div className="session-list">
      <h1>📅 Explore Our Sessions</h1>
      <p className="catchphrase">“Consistency turns goals into achievements.”</p>
      <Link to="/sessions/new" className="add-btn">➕ Create a Session</Link>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>
            <Link to={`/sessions/${session.id}`}>
              {session.title} ({session.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionList;
