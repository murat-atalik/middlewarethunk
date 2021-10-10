const INITIAL_STATE = {
  movies: [],
  message: '',
  isloading: true,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return { ...state, isloading: true, message: '' };
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        message: '',
        isloading: false,
      };
    case 'GET_MOVIES_ERROR':
      return { ...state, message: action.payload, isloading: false };
    default:
      return state;
  }
};
