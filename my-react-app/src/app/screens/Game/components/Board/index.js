import React, { Fragment } from 'react';

import Square from './components/Square';
import styles from './styles.scss';

class Board extends React.Component {
  renderSquare = i => <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;

  render() {
    return (
      <Fragment>
        <div className={styles.boardrow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardrow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardrow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board;