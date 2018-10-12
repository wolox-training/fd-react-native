import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../../redux/game/actions';

import Board from './components/Board';
import styles from './styles.scss';
import calculateWinner from './utils.js';

class Game extends Component {
  handleClick(i) {
    this.props.dispatch({ type: actions.handleClick, pos: i });
  }

  jumpTo(stepNumber) {
    this.props.dispatch({ type: actions.jumpTo, stepNumber });
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
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
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
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

export default connect(mapStateToProps)(Game);
