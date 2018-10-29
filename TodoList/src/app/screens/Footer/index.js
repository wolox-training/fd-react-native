import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { styles } from './styles.js';

export default class Footer extends Component {
  render() {
    const {onRemoveCompleted} = this.props
    return (
      <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
        <Text style={styles.remove}>Remove Completed Items</Text>
      </TouchableOpacity>
    )
  }
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func,
}
