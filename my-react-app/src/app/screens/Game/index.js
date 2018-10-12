import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../../redux/game/actions';
import { actionCreators } from '../../../redux/game/actions';
import Board from './components/Board';
import styles from './styles.scss';
import calculateWinner from './utils.js';

class Game extends Component {
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

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={i => this.props.handleClick(i)} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => {
    dispatch(actionCreators.handleClickCreator(i));
  },

  jumpTo: stepNumber => {
    dispatch(actionCreators.jumpTo(stepNumber));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
