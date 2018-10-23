import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import Board from './components/Board';
import styles from './styles.scss';

function Game({ moves, history, stepNumber }) {
  const current = history[stepNumber];
  return (
    <form onMoves={moves}>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={this.props.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </form>
  );
}

Game.propTypes = {
  moves: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.arrayOf(PropTypes.string) })).isRequired,
  stepNumber: PropTypes.number.isRequired
};

export default reduxForm({})(Game);
