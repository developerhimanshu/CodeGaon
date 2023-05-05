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
        <td className="h-16">{problem.name}</td>
        <td>{problem.acceptance}</td>
        <td>{problem.difficulty}</td>
      </tr>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <table width="80%">{problemhtml}</table>
      <div className="flex gap-8">
        <button
          className="border-2 px-6 py-1 bg-black rounded-md border-solid border-black"
          onClick={() => setCurrProblems(problems)}
        >
          1
        </button>
        <button
          className="border-2 bg-black rounded-md px-6 py-1 border-solid border-black"
          onClick={() => setCurrProblems(problems2)}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default Problems;
