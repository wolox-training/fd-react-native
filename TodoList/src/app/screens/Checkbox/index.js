import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { styles } from './styles.js'

export default class Checkbox extends Component {
  render() {
    const {onToggle, isChecked} = this.props
    return (
      <TouchableOpacity onPress={ onToggle }>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  isChecked: PropTypes.bool,
}
