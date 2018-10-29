import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../../../redux/actions'
import Title from '../Title'
import Footer from '../Footer'
import List from '../List'
//import Checkbox from '../components/Checkbox'
//import Input from '../components/Input'
import styles from './styles.js'


const mapStateToProps = (state) => ({
  items: state.items,
})

class ToDoApp extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

render() {
  return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <View style={styles.divider}/>
        <List/>
        <View style={styles.divider} />
        <Footer/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ToDoApp)
