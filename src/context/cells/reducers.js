import { combineReducers } from 'redux';
import types from './types';


export const user_cells = (state = {
  safe_ship_cells:[],
  water_cells:[],
  hitted_ship_cells:[],

}, action ) => {
    switch (action.type) {
        case types.SAVE_CELLS:
          return {
            ...state,
            safe_ship_cells: action.payload.data,
          };
        case types.MISSED_HIT:
        return {
            ...state,
            water_cells: action.payload.data,
        };
        case types.SUCCESSFULL_HIT:
          return {
            ...state,
            hitted_ship_cells: action.payload.data,
          };
    
        default:
          return state
      }
    }

    export default combineReducers({
        list: user_cells
      });