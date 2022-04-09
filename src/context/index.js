import { combineReducers } from 'redux';

import users from './users';
import ships from './ships';
import game from './game';
import cells from './cells';

export default combineReducers({
  users: users.reducers,
  ships: ships.reducers,
  game: game.reducers,
  cells: cells.reducers,
});

