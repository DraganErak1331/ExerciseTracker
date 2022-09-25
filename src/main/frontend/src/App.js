import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.component.js";
import EditExercise from "./components/edit-exercise-log.component";
import CreateExercise from "./components/create-exercise-log.component";
import CreateUser from "./components/create-user.component";
import ExerciseList from "./components/exercise-list.component.js";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create-exercise-log" element={<CreateExercise />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
