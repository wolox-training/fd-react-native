import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
