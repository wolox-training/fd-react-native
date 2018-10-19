import React, { Component } from 'react';

import loginService from '../../../services/loginService.js';
import { setHeader } from '../../../config/api.js';

import LoginForm from './layout.js';

class LoginFormContainer extends Component {
  handleSubmit = async values => {
    const response = await loginService.login(values);
    if (response.ok) {
      setHeader({ token: response.data.token });
    } else {
      alert('Invalid password');
    }
  };
  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default LoginFormContainer;
