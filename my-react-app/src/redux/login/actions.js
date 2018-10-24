import loginService from '../../services/loginService';

export const actions = {
  GET_TOKEN: 'GET_TOKEN',
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: 'GET_TOKEN_FAILURE'
};

const actionCreators = {
  login: credentials => async dispatch => {
    dispatch({ type: actions.GET_TOKEN });
    const response = await loginService.login(credentials);
    if (response.ok) {
      dispatch({
        type: actions.GET_TOKEN_SUCCESS,
        payload: {token: response.data, email: response.data }
      });
    } else {
      if (response.data.error) {
        alert('Error');
      }
      dispatch({
        type: actions.GET_TOKEN_FAILURE,
        payload: response.problem
      });
    }
  }
};
export default actionCreators;
