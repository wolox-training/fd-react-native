import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles.js'

function Title (children) {
    return (
      <Text style={styles.title}>{children}</Text>
    )
}

export default Title;
