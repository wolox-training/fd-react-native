import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import List from '../components/List'
//import Checkbox from '../components/Checkbox'
//import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

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

export default connect(mapStateToProps)(App)
