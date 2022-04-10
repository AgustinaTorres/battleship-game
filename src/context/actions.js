import types from "./types";

function startGame(data) {
  return {
    type: types.START_GAME,
    data,
  };
}

export default startGame;
