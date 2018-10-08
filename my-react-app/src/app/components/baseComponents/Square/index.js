import React from 'react';
import './styles.scss';

function Square(onClick, value) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
