import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 25,
  },
  remove: {
    color: 'red'
  },
})

export default class Footer extends Component {

  render() {

    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
