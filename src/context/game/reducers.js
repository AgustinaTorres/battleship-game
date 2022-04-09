import { combineReducers } from 'redux';
import types from './types';


export const game = (state = {
  state:"",
  winner:""
}, action ) => {
    switch (action.type) {
        case types.START_GAME:
          return {
            ...state,
            state: action.payload.data,
          };
        case types.CANCEL_GAME:
        return {
            ...state,
            state: action.payload.data,
        };
        case types.FINISH_GAME:
          return {
            ...state,
            state: action.payload.data,
            winner: ""
          };
    
        default:
          return state
      }
    }

    export default combineReducers({
        list: game
      });