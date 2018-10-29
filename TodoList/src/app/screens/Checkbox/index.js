import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'

export default class Checkbox extends Component {

  static propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool,
  }

  render() {
    const {onToggle, isChecked} = this.props

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          { isChecked && <View style={styles.check}/> }
        </View>
      </TouchableOpacity>
    )
  }
}