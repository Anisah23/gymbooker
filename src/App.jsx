import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Landing
import Landing from "./components/Landing/Landing";

// Trainers
import TrainerList from "./components/Trainers/TrainerList";
import TrainerForm from "./components/Trainers/TrainerForm";
import TrainerDetail from "./components/Trainers/TrainerDetail";

// Trainees
import TraineeList from "./components/Trainees/TraineeList";
import TraineeForm from "./components/Trainees/TraineeForm";
import TraineeDetail from "./components/Trainees/TraineeDetail";

// Sessions
import SessionList from "./components/Sessions/SessionList";
import SessionForm from "./components/Sessions/SessionForm";
import SessionDetail from "./components/Sessions/SessionDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Trainers */}
          <Route path="/trainers" element={<TrainerList />} />
          <Route path="/trainers/new" element={<TrainerForm />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} />

          {/* Trainees */}
          <Route path="/trainees" element={<TraineeList />} />
          <Route path="/trainees/new" element={<TraineeForm />} />
          <Route path="/trainees/:id" element={<TraineeDetail />} />

          {/* Sessions */}
          <Route path="/sessions" element={<SessionList />} />
          <Route path="/sessions/new" element={<SessionForm />} />
          <Route path="/sessions/:id" element={<SessionDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
