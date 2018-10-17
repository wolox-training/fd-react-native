import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput } from './components/Fields';

const minLength = value => (value && value.length < 8 ? ` Must be 8 characters or more` : undefined);

const required = value => (value ? undefined : 'Required');

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" type="email" component={customInput} validate={required} label="Email" />
        <Field
          name="password"
          type="password"
          component={customInput}
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
