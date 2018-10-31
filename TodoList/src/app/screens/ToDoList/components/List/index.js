import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Checkbox from './components/Checkbox';
import styles from './styles';

class List extends Component {
  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = [styles.item, item.completed && styles.completed];
    return (
      <View key={i} style={itemStyle}>
        <Text>
          {item.label}
        </Text>
        <View style={styles.section}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => onToggleItemCompleted(i)}
          />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.removed}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        style={styles.container}
        renderItem={this.renderItem}
      />
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired,
};

export default List;
