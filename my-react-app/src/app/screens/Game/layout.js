import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import styles from './styles.scss';

function Game({ squares, status, moves, onClick }) {
  return (
    <form onMoves={moves}>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={squares} onClick={onClick} />
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
  squares: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Game;
