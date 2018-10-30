import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

function Checkbox({ onToggle, isChecked }) {
  const styleCheck = isChecked ? styles.inner : styles.box;
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styleCheck} />
    </TouchableOpacity>
  );
}

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
};

export default Checkbox;
