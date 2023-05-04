import "./styles//App.css";
import Signup from "./components/signup";
import Problems from "./components/problems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Signin from "./components/signin";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
