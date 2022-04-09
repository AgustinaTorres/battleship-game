import { combineReducers } from 'redux';
import types from './types';


export const user_ships = (state = {
    items: [
        {
            id:1,
            name:"carrier",
            spaces:4,
            direction:"x",
            cells : [],
            state: "safe",
            user_name:""
        },
        {
            id:2,
            name:"cruiser",
            spaces:3,
            direction:"x",
            cells : [],
            state: "safe",
            user_name:""
        },
        {
            id:3,
            name:"cruiser",
            spaces:3,
            direction:"x",
            cells : [],
            state: "safe",
            user_name:""
        },
        {
            id:4,
            name:"cruiser",
            spaces:3,
            direction:"x",
            cells : [],
            state: "safe",
            user_name:""
        },
        {   id:5,
            name:"submarine",
            spaces:2,
            direction:"x",
            cells : [],
            state: "safe",
            user_name:""
    
        }]
}, action ) => {
    switch (action.type) {
        case types.SAVE_SHIP_USER:
          return {
            ...state,
            user: action.payload.data,
          };
        case types.SAVE_SHIP_DIRECTION:
          //may be not necessary to save this on the global state
        return {
            ...state,
            direction: action.payload.data,
        };
        case types.SAVE_SHIP_CELLS:
          return {
            ...state,
            cells: action.payload.data,
          };
        case types.CHANGE_SHIP_STATE:
          return {
            ...state,
            state: action.payload.data,
          };
    
        default:
          return state
      }
    }

    export const user_ship = (state = {
      id:"",
      name:"",
      spaces:"",
      direction:"",
      cells : [],
      state: "",
      user_name:""

  }, action ) => {
      switch (action.type) {
         /*  case types.SAVE_SHIP_USER:
            return {
              ...state,
              user: action.payload.data,
            };
          case types.SAVE_SHIP_DIRECTION:
            //may be not necessary to save this on the global state
          return {
              ...state,
              direction: action.payload.data,
          };
          case types.SAVE_SHIP_CELLS:
            return {
              ...state,
              cells: action.payload.data,
            };
          case types.CHANGE_SHIP_STATE:
            return {
              ...state,
              state: action.payload.data,
            }; */
      
          default:
            return state
        }
      }

    export default combineReducers({
        list: user_ships,
        current: user_ship 
      });

