import types from "./types";

export const startGame = (data) => {
  return {
    type: types.START_GAME,
    data,
  };
};

export const finishGame = (data) => {
  return {
    type: types.FINISH_GAME,
    data,
  };
};

export const surrenderGame = (data) => {
  return {
    type: types.SURRENDER_GAME,
    data,
  };
};
