import { actions } from './actions';

const initialState = {
  token: '',
  email: '',
  error: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN:
      return state;
    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email
      };
    case actions.GET_TOKEN_FAILURE:
      return {
        error: true,
        ...state
      };
    default:
      return state;
  }
}
