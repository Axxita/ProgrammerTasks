import React, { useState } from "react";
import "./ProgrammerList.css";

function ProgrammerList({ programmers, onProgrammersChange }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("junior");

  const handleAddProgrammer = () => {
    if (!name) return;
    const newProgrammer = { name, level };
    onProgrammersChange([...programmers, newProgrammer]);
    setName("");
    setLevel("junior");
  };

  const handleRemoveProgrammer = (indexToRemove) => {
    const updatedProgrammers = programmers.filter(
      (_, index) => index !== indexToRemove
    );
    onProgrammersChange(updatedProgrammers);
  };

  return (
    <div className="ProgrammerList">
      <h2>Programátoři</h2>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Celé jméno"
      />
      <select value={level} onChange={(event) => setLevel(event.target.value)}>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
      </select>
      <button className="add-button" onClick={handleAddProgrammer}>
        Přidat programátora
      </button>
      <ul>
        {programmers.map((programmer, index) => (
          <li
            key={index}
            className={programmer.level === "senior" ? "senior" : ""}
          >
            {programmer.name} ({programmer.level})
            <button
              className="remove-button"
              onClick={() => handleRemoveProgrammer(index)}
            >
              Odebrat
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgrammerList;
