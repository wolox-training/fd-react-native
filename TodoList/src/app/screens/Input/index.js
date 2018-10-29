import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'
import { styles } from './styles.js'

export default class Input extends Component {
  state = { text: '',  }
  onChangeText = (text) => {
    this.setState({text})
  }
  onSubmitEditing = () => {
    const {onSubmit} = this.props
    const {text} = this.state
    if (!text) return
    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const {onSubmit, placeholder} = this.props
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
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}
