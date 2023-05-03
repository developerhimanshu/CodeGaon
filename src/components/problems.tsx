import React, { useState } from "react";

let problems = [
  {
    name: "N-Queens",
    acceptance: "60%",
    difficulty: "Hard",
  },
  {
    name: "N-Queen",
    acceptance: "80%",
    difficulty: "Easy",
  },
];
let problems2 = [
  {
    name: "p1",
    acceptance: "60%",
    difficulty: "Hard",
  },
  {
    name: "p2",
    acceptance: "80%",
    difficulty: "Easy",
  },
];
function Problems() {
  const [currProblems, setCurrProblems] = useState(problems);
  let problemhtml = currProblems.map((problem) => {
    return (
      <tr>
        <td>{problem.name}</td>
        <td>{problem.acceptance}</td>
        <td>{problem.difficulty}</td>
      </tr>
    );
  });
  return (
    <div style={{ width: "100vw" }}>
      <table width="80%">{problemhtml}</table>
      <button onClick={() => setCurrProblems(problems)}>1</button>
      <button onClick={() => setCurrProblems(problems2)}>2</button>
    </div>
  );
}

export default Problems;
