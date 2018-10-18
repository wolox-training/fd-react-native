import React, { Component } from 'react';

import LoginForm from './layout.js';

class LoginFormContainer extends Component {
  submit = values => window.alert(JSON.stringify(values));

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default LoginFormContainer;
