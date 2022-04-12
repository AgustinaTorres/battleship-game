import { tab } from "@testing-library/user-event/dist/tab";
import "./App.css";
import Start from "./pages/start/Start";
import Game from "./pages/game/Game";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
export default App;
