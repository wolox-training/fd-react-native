import React, { Component } from 'react';

import LoginForm from './layout.js';

class LoginFormContainer extends Component {
  handleSubmit = values => alert(JSON.stringify(values));

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default LoginFormContainer;
