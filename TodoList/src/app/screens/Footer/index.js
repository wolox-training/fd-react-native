import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import styles from './styles.js';

export default class Footer extends Component {

  render() {

    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
