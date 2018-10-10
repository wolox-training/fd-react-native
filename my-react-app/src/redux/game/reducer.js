import calculateWinner from '../../app/components/baseComponents/Game/utils';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.handleClick: {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.pos]) {
        return state;
      }
      squares[action.pos] = state.xIsNext ? 'X' : 'O';
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
    case actions.jumpTo: {
      return {
        history: state.history,
        stepNumber: action.stepNumber,
        xIsNext: state.stepNumber % 2 === 0
      };
    }
    default:
      return state;
  }
}

export default reducer;
