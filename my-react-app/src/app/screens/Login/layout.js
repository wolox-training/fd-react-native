import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

export const minLength = value => (value && value.length < 8 ? 'Must be 8 characters or more' : undefined);

function required(value) {
  return value ? undefined : ' Required';
}

function FormInput(props) {
  const validate = [required, minLength];
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Tic Tac Toe</h1>
        <label>Email</label>
        <Field
          name="email"
          /*render*/
          type="email"
          placeholder="example@gmail.com"
          validate={required}
        />
        <label>Password</label>
        <Field name="password" /*render*/ type="password" validate={validate} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FormInput.propTypes = {
  handleSubmit: PropTypes.element
};

export default reduxForm({ form: 'simple' })(FormInput);
