import React, { useState } from "react";
import "./TaskPlanner.css";

function TaskPlanner({ programmers }) {
  const [linesOfCode, setLinesOfCode] = useState("");
  const [days, setDays] = useState("");

  const calculateFeasibility = () => {
    const totalLinesPerDay = programmers.reduce(
      (total, { level }) => total + (level === "junior" ? 100 : 200),
      0
    );
    const totalCapacity = totalLinesPerDay * days;
    return totalCapacity >= linesOfCode;
  };

  const isFeasible = calculateFeasibility();

  return (
    <div className="TaskPlanner">
      <h2>Úkol</h2>
      <input
        type="number"
        value={linesOfCode}
        onChange={(event) => setLinesOfCode(event.target.value)}
        placeholder="Počet řádků kódu"
      />
      <input
        type="number"
        value={days}
        onChange={(event) => setDays(event.target.value)}
        placeholder="Časový limit (dny)"
      />
      <button
        style={{ backgroundColor: isFeasible ? "green" : "red" }}
        disabled={!isFeasible}
      >
        Schválit plán
      </button>
    </div>
  );
}

export default TaskPlanner;
