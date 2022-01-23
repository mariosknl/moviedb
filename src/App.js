import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/MoviePage";
import { TestContextProvider } from "./context";

function App() {
  return (
    <TestContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </TestContextProvider>
  );
}

export default App;
