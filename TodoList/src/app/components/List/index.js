import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Checkbox from '../Checkbox'
import { styles } from './styles.js'

function List (items) {
  renderItem = (item, i) => {
    const {onToggleItemCompleted, onRemoveItem} = this.props
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
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
    )
  }
    return (
      <FlatList style={styles.container}>
        {items.map(this.renderItem)}
      </FlatList>
    )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired,
}

export default List;