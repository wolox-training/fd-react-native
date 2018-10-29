import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { styles } from './styles.js'

function Checkbox ({onToggle, isChecked}) {
    return (
      <TouchableOpacity onPress={ onToggle }>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
}

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
}

export default Checkbox
