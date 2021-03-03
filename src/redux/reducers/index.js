import { combineReducers } from 'redux';

import stateGameReducer from './currentWord';


const rootReducer = combineReducers({
    stateGame: stateGameReducer,
    // pizzas: `pizzasReducer`,
  });
  export default rootReducer;