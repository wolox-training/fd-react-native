import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginService from '../../../services/loginService.js';
import { setAuthorizationHeader } from '../../../config/api.js';
import actionCreators from '../../../redux/login/actions.js';

import LoginForm from './layout.js';

class LoginFormContainer extends Component {
  handleSubmit = async values => {
    const response = await loginService.login(values);
    if (response.ok) {
      setAuthorizationHeader(response.data.token);
    } else {
      alert('Invalid password');
    }
  };
  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  login: credentials =>
    dispatch(actionCreators.login({ email: credentials.email, password: credentials.password }))
});

export default connect(mapDispatchToProps)(LoginFormContainer);
