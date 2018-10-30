import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../../../redux/actions'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import List from '../../components/List'
import Input from '../../components/Input'
import { styles } from './styles.js'

class ToDoApp extends Component {

render() {
  const {items} = this.props
  return (
    <View style={styles.container}>
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

ToDoApp.propTypes = {
  items: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = dispatch => ({
  removeCompleted: () => {
    dispatch(actionCreators.removeCompleted());
  },
  toggleItem: index => {
    dispatch(actionCreators.toggleItem(index));
  },
  onRemoveItem: index => {
    dispatch(actionCreators.removeItem(index));
  },
  addItem: item => {
    dispatch(actionCreators.addItem(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp)
