import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/actions';
import Title from './components/Title';
import Footer from './components/Footer';
import List from './components/List';
import Input from './components/Input';
import { styles } from './styles';

function ToDoApp({
  items, addItem, removeItem, toggleItem, removeCompleted
}) {
  return (
    <View style={styles.container}>
      <Title />
      <Input placeholder="Enter an item!" onSubmit={addItem} />
      <List items={items} onRemoveItem={removeItem} onToggleItemCompleted={toggleItem} />
      <Footer onRemoveCompleted={removeCompleted} />
    </View>
  );
}

ToDoApp.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

export default ToDoApp;
