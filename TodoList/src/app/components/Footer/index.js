import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { styles } from './styles.js';

function Footer ({onRemoveCompleted}) {
    return (
      <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
        <Text style={styles.remove}>Remove Completed Items</Text>
      </TouchableOpacity>
    )
  }

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func.isRequired,
}

export default Footer
