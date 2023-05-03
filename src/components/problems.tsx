import React from "react";

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
function Problems() {
  let problemhtml = problems.map((problem) => {
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
    </div>
  );
}

export default Problems;
