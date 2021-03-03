const initialState = {
  isGame: false,
  currentWord: {},
  wrongWords: [],
  lives: 5,
};

//Функция Reducer
const stateGameReducer = (state = initialState, action) => {
  if (action.type === 'SET_CURRENT_WORD') {
    return {
      ...state,
      currentWord: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default stateGameReducer;
