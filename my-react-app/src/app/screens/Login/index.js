import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './layout';

class Login extends Component {
  handleSubmit = values => this.props.login(values);
  render() {
    return <FormInput onSubmit={this.handleSubmit} />;
  }
}
