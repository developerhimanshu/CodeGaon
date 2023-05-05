import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { problems } from "./problems";

function Problem() {
  const [code, setCode] = useState("");

  const { id } = useParams();
  console.log(id);
  let prob;
  problems.forEach((problem) => {
    if (problem.name == id) {
      prob = problem;
    }
  });
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{prob.name}</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Description:</h3>
        <p>{prob.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Test Cases:</h3>
        {prob.testCases.map((testCase, i) => (
          <div key={i} className="flex flex-col items-start">
            <p>
              <span className="font-bold">Input:</span> {testCase.input}
            </p>
            <p>
              <span className="font-bold">Output:</span> {testCase.output}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Code:</h3>
        <textarea
          className="w-full p-2 border rounded-md"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <button className="border-s px-6 py-1 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-md border-solid border-gray-700">
        Submit
      </button>
    </div>
  );
}

export default Problem;
