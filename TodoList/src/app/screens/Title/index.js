import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles.js'

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
