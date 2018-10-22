import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import styles from './styles.scss';

class Game extends Component {
  render() {
    const { moves } = this.props;
    const current = history[this.props.stepNumber];
    return (
      <form onMoves={moves}>
        <div className={styles.game}>
          <div className={styles.gameBoard}>
            <Board squares={current.squares} onClick={i => this.props.handleClick(i)} />
          </div>
          <div className={styles.gameInfo}>
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </form>
    );
  }
}

Game.propTypes = {
  moves: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired
};
