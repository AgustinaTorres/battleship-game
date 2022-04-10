import { tab } from "@testing-library/user-event/dist/tab";
/* import { Routes, Route, Router } from "react-router-dom"; */
import "./App.css";
import Start from "./pages/start/Start";
import Game from "./pages/game/Game";
/* import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); */

function App() {
  return (
    <div>
      <Start />
      <Game />
    </div>
  );
}
export default App;
