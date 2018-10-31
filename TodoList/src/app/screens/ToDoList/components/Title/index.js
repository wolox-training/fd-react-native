import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

function Title() {
  return (
    <Text style={styles.title}>Todo List</Text>
  );
}

export default Title;
