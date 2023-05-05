import React, { useState } from "react";
import Problem from "./problem";
import { Link } from "react-router-dom";

const problems = [
  {
    name: "N-Queens",
    acceptance: "60%",
    difficulty: "Hard",
    description: "Problem description goes here.",
    testCases: [
      { input: "input1", output: "output1" },
      { input: "input2", output: "output2" },
    ],
  },
  {
    name: "N-Queen",
    acceptance: "80%",
    difficulty: "Easy",
    description: "Problem description goes here.",
    testCases: [{ input: "input1", output: "output1" }],
  },
  {
    name: "M-Queen",
    acceptance: "80%",
    difficulty: "Medium",
    description: "Problem description goes here.",
    testCases: [
      { input: "input1", output: "output1" },
      { input: "input2", output: "output2" },
      { input: "input3", output: "output3" },
    ],
  },
];
let problems2 = [
  {
    name: "p1",
    acceptance: "60%",
    difficulty: "Hard",
    description: "Problem description goes here.",
    testCases: [
      { input: "input1", output: "output1" },
      { input: "input2", output: "output2" },
      { input: "input3", output: "output3" },
    ],
  },
  {
    name: "p2",
    acceptance: "80%",
    difficulty: "Easy",
    description: "Problem description goes here.",
    testCases: [
      { input: "input1", output: "output1" },
      { input: "input2", output: "output2" },
      { input: "input3", output: "output3" },
    ],
  },
];
function Problems() {
  const [currProblems, setCurrProblems] = useState(problems);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleProblemClick = (problem: any) => {
    setSelectedProblem(problem);
  };

  let problemhtml = currProblems.map((problem) => {
    return (
      <tr className="h-16 cursor-pointer">
        <td>
          <Link to={"/" + problem.name}> {problem.name}</Link>
        </td>
        <td>{problem.acceptance}</td>
        {problem.difficulty == "Hard" ? (
          <td className="text-red-500">{problem.difficulty}</td>
        ) : problem.difficulty == "Medium" ? (
          <td className="text-yellow-500">{problem.difficulty}</td>
        ) : (
          <td className="text-green-500">{problem.difficulty}</td>
        )}
      </tr>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <table width="80%">{problemhtml}</table>
      <div className="flex gap-8">
        <button
          className="border-s px-6 py-1 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-md border-solid border-gray-700"
          onClick={() => setCurrProblems(problems)}
        >
          1
        </button>
        <button
          className="border-s px-6 py-1 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-md border-solid border-gray-700"
          onClick={() => setCurrProblems(problems2)}
        >
          2
        </button>
      </div>
    </div>
  );
}

export { problems, problems2 };
export default Problems;
