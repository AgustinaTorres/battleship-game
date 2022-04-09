import { combineReducers } from 'redux';
import types from './types';


export const user = (state = {
   name:"",
   turn:false,

}, action ) => {
    switch (action.type) {
        case types.SAVE_USER:
          return {
            ...state,
            name: action.payload.data,
          };
        case types.CHANGE_TURN:
        return {
            ...state,
            turn: !state.turn,
        };
        default:
          return state
      }
    }

    export default combineReducers({
        current: user
      });