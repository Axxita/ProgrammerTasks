import React, { useState } from "react";
import ProgrammerList from "./components/ProgrammerList";
import TaskPlanner from "./components/TaskPlanner";
import "./App.css";

function App() {
  const [programmers, setProgrammers] = useState([]);
  const [activeSection, setActiveSection] = useState("programmers");

  // výpočet celkového počtu a rozdělení programátorů (footer)
  const calculateTotals = () => {
    const total = programmers.length;
    const seniors = programmers.filter(
      (programmer) => programmer.level === "senior"
    ).length;
    const juniors = total - seniors;

    const linesPerDayJunior = 100;
    const linesPerDaySenior = 200;

    const totalLines =
      juniors * linesPerDayJunior + seniors * linesPerDaySenior;

    return { total, seniors, juniors, totalLines };
  };
  const { total, seniors, juniors, totalLines } = calculateTotals();

  return (
    <div className="App">
      <header>
        <button onClick={() => setActiveSection("programmers")}>
          Programátoři
        </button>
        <button onClick={() => setActiveSection("task")}>Úkol</button>
      </header>

      {activeSection === "programmers" ? (
        <ProgrammerList
          programmers={programmers}
          onProgrammersChange={setProgrammers}
        />
      ) : (
        <TaskPlanner programmers={programmers} />
      )}

      <footer>
        <p>Celkový počet programátorů: {total}</p>
        <p>Seniorů: {seniors} </p>
        <p>Juniorů: {juniors}</p>
        <p>Aktuální kapacita řádků kódu za den: {totalLines}</p>
      </footer>
    </div>
  );
}

export default App;
