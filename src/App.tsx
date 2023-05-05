import "./styles//App.css";
import Signup from "./components/signup";
import Problems from "./components/problems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Signin from "./components/signin";
import Problem from "./components/problem";

function App() {
  return (
    <div className="bg-neutral-800 min-h-screen h-full text-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Problems />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/:id" element={<Problem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
