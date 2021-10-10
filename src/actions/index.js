import axios from 'axios';

export const getMovies = () => (dispatch) => {
  dispatch({ type: 'GET_MOVIES_START' });
  axios
    .get('https://6150cd8cd0a7c1001701689e.mockapi.io/movies')
    .then((response) =>
      dispatch({ type: 'GET_MOVIES_SUCCESS', payload: response.data })
    )
    .catch((error) => dispatch({ type: 'GET_MOVIES_ERROR', payload: error }));
};
