import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/login/actions.js';

import LoginForm from './layout.js';

const mapDispatchToProps = dispatch => ({
  onSubmit: credentials => dispatch(actionCreators.login(credentials))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
