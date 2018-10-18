import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { EMAIL_FIELD, PASSWORD_FIELD } from './fieldNames.js';
import { FORM_NAME } from './fieldForm.js'
import { CustomInput } from './components/CustomInput/index.js';
import { required, minLength } from './utils.js';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name={EMAIL_FIELD} type="email" component={CustomInput} validate={required} label="Email" />
        <Field
          name={PASSWORD_FIELD}
          type="password"
          component={CustomInput}
          validate={[required, minLength]}
          label="Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: { FORM_NAME }
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default LoginForm;
