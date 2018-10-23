import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/game/actions';

import Game from './layout.js';
import calculateWinner from './utils.js';

class GameContainer extends Component {
  handleClick = i => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    this.props.handleClick(i);
  };

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

    return <Game squares={current.squares} status={status} moves={moves} onClick={this.handleClick} />;
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

GameContainer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.arrayOf(PropTypes.string) })).isRequired,
  stepNumber: PropTypes.number.isRequired,
  jumpTo: PropTypes.func.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
