import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { FORM_FIELDS } from './fields.js';
import { CustomInput } from './components/CustomInput/index.js';
import { userValidation, passwordValidation } from './utils.js';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name={FORM_FIELDS.EMAIL_FIELD}
          type="text"
          component={CustomInput}
          validate={userValidation}
          label="Email"
        />
        <Field
          name={FORM_FIELDS.PASSWORD_FIELD}
          type="password"
          component={CustomInput}
          validate={passwordValidation}
          label="Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM_FIELDS.FORM_NAME
})(LoginForm);
