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

class ToDoApp extends Component {
  render() {
    const {
      items, addItem, removeItem, toggleItem, removeCompleted
    } = this.props;
    return (
      <View style={styles.container}>
        <Title />
        <Input
          placeholder="Enter an item!"
          onSubmit={addItem}
        />
        <List
          items={items}
          onRemoveItem={removeItem}
          onToggleItemCompleted={toggleItem}
        />
        <Footer onRemoveCompleted={removeCompleted} />
      </View>
    );
  }
}

ToDoApp.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(actionCreators.addItem(item));
  },
  removeItem: index => {
    dispatch(actionCreators.removeItem(index));
  },
  toggleItem: index => {
    dispatch(actionCreators.toggleItem(index));
  },
  removeCompleted: () => {
    dispatch(actionCreators.removeCompleted());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
