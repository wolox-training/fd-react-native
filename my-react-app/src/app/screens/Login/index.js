import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/login/actions.js';

import LoginForm from './layout.js';

class LoginFormContainer extends Component {
  render() {
    return <LoginForm onSubmit={this.props.login} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: credentials => dispatch(actionCreators.login(credentials))
});

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
