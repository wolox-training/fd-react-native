import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 30,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
})

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}
