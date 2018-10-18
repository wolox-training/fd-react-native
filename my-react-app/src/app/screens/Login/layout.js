import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { CustomInput } from './components/Fields/customInput.js';
import { required, minLength } from './utils.js';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" type="email" component={CustomInput} validate={required} label="Email" />
        <Field
          name="password"
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
  form: 'Login'
})(LoginForm);

export default LoginForm;
