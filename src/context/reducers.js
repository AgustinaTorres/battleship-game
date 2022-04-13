import { combineReducers } from "redux";
import types from "./types";

export const user_ships = (
  state = {
    items: [
      {
        id: 1,
        name: "carrier",
        spaces: 4,
        direction: "x",
        cells: [],
      },
      {
        id: 2,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
      },
      {
        id: 3,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
      },
      {
        id: 4,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
      },
      {
        id: 5,
        name: "submarine",
        spaces: 2,
        direction: "x",
        cells: [],
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        items: action.data.ships,
      };

    default:
      return state;
  }
};

export const cpu_ships = (
  state = {
    items: [
      {
        id: 6,
        name: "carrier",
        spaces: 4,
        direction:
          "x" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
        icon: "GiCarrier",
      },
      {
        id: 7,
        name: "cruiser",
        spaces: 3,
        direction:
          "x1" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
      },
      {
        id: 8,
        name: "cruiser",
        spaces: 3,
        direction:
          "x2" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
      },
      {
        id: 9,
        name: "cruiser",
        spaces: 3,
        direction:
          "x3" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
      },
      {
        id: 10,
        name: "submarine",
        spaces: 2,
        direction:
          "x" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
      },
    ],
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const game = (
  state = {
    game_status: "pending",
    user_name: "",
    game_winner: "",
  },
  action
) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        game_status: action.data.gameStatus,
        user_name: action.data.userName,
      };
    case types.FINISH_GAME:
      return {
        ...state,
        game_status: action.data.gameStatus,
        game_winner: action.data.gameWinner,
      };
    case types.SURRENDER_GAME:
      return {
        ...state,
        game_status: action.data.gameStatus,
      };

    default:
      return state;
  }
};

export default combineReducers({
  user_ships,
  cpu_ships,
  game,
});
