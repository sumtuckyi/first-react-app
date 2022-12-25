import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
        <Route path="/hello" element={<h1>Hello^^</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

