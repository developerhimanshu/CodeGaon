import "./styles//App.css";
import Signup from "./components/signup";
import Problems from "./components/problems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Signin from "./components/signin";

function App() {
  return (
    <div className="bg-neutral-800 min-h-screen h-full text-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Problems />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
