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
        /* state: "safe", */
      },
      {
        id: 2,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
        /* state: "safe", */
      },
      {
        id: 3,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
        /* state: "safe", */
      },
      {
        id: 4,
        name: "cruiser",
        spaces: 3,
        direction: "x",
        cells: [],
        /* state: "safe", */
      },
      {
        id: 5,
        name: "submarine",
        spaces: 2,
        direction: "x",
        cells: [],
        /* state: "safe", */
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
        game_status: "started",
        user_name: action.data.userName,
      };

    case types.CANCEL_GAME:
      return {
        ...state,
        game_status: "canceled",
      };
    case types.FINISH_GAME:
      return {
        ...state,
        game_status: "finished",
      };
    case types.SEE_GAME_WINNER:
      return {
        ...state,
        game_winner: action.data,
      };

    default:
      return state;
  }
};

let directions = ["x", "y"];

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
        /* state: "safe", */
      },
      {
        id: 7,
        name: "cruiser",
        spaces: 3,
        direction:
          "x1" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
        /* state: "safe", */
      },
      {
        id: 8,
        name: "cruiser",
        spaces: 3,
        direction:
          "x2" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
        /* state: "safe", */
      },
      {
        id: 9,
        name: "cruiser",
        spaces: 3,
        direction:
          "x3" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
        /* state: "safe", */
      },
      {
        id: 10,
        name: "submarine",
        spaces: 2,
        direction:
          "x" /* directions[Math.floor(Math.random() * directions.length)] */,
        cells: [],
        /* state: "safe", */
      },
    ],
  },
  action
) => {
  switch (action.type) {
    /* case types.START_GAME:
      return {
        ...state,
        items: action.data.ships,
      }; */
    default:
      return state;
  }
};

export default combineReducers({
  user_ships,
  game,
  cpu_ships,
});
