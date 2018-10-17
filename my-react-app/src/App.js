import React, { Component } from 'react';

import Login from './app/screens/Login/index.js';

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return <Login onSubmit={this.submit} />;
  }
}

export default RegisterFormContainer;
