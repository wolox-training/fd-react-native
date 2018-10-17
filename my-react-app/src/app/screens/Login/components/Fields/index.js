import React from 'react';

export const customInput = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
};
