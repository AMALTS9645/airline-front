import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListingPage/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lists" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
