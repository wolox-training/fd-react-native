import React, { Fragment } from 'react';

export const CustomInput = props => {
  const { label, input, meta } = props;
  return (
    <Fragment>
      <label> {props.label} </label>
      <input {...props.input} type={props.type} />
      {meta.error && meta.touched && !meta.active && <div> {props.label + meta.error}</div>}
    </Fragment>
  );
};
