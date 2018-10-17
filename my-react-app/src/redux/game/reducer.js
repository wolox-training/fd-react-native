import calculateWinner from '../../app/screens/Game/utils';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.HANDLE_CLICK: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.payload.i]) {
        return state;
      }
      squares[action.payload.i] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([
          {
            squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };
    }
    case actions.JUMP_TO: {
      return {
        ...state,
        stepNumber: action.payload.stepNumber,
        xIsNext: state.stepNumber % 2 === 0
      };
    }
    default:
      return state;
  }
}

export default reducer;
