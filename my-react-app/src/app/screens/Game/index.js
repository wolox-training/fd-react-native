import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/game/actions';

import Game from './layout.js';
import calculateWinner from './utils.js';

class GameContainer extends Component {
  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return <Game onMoves={this.moves} />;
  }
}

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => {
    dispatch(actionCreators.handleClickCreator(i));
  },

  jumpTo: stepNumber => {
    dispatch(actionCreators.jumpToCreator(stepNumber));
  }
});

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.arrayOf(PropTypes.string) })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  jumpTo: PropTypes.func.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
