import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'
import { styles } from './styles.js'

function Input ({onSubmit, placeholder}) {
  state = { text: '' }
  onChangeText = text => {
    this.setState({text})
  }

  onSubmitEditing = () => {
    const {onSubmit} = this.props
    const {text} = this.state
    if (!text) return
    onSubmit(text)
    this.setState({text: ''})
  }
  
    const {text} = this.state

    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false}
      />
    )
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Input;
