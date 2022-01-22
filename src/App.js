import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:title" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="/" element={<App />} />
<Route path="/:title" element={MoviePage} />
<Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  }
/> */
}
