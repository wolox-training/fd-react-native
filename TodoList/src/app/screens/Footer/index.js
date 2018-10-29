import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import styles from './styles.js';

export default class Footer extends Component {

  static propTypes = {
    onRemoveCompleted: PropTypes.func,
  }

  render() {
    const {onRemoveCompleted} = this.props

    return (
      <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
        <Text style={styles.remove}>Remove Completed Items</Text>
      </TouchableOpacity>
    )
  }
}
