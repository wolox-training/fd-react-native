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
    addItem = (item) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(item))
  }

  removeItem = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeItem(index))
  }

  toggleItem = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItem(index))
  }

  removeCompleted = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompleted())
  }
render() {
  return (
      <Title> Todo List </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItem}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(ToDoApp)
