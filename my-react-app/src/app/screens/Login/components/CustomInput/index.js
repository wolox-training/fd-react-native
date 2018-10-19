import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const CustomInput = ({ label, input, meta, type }) => (
  <Fragment>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type={type} />
    {meta.error && meta.touched && <span>{label + meta.error}</span>}
  </Fragment>
);

CustomInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object)
};

export default CustomInput;
