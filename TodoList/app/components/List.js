import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "gainsboro"
  }
})

export default class List extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }
}
