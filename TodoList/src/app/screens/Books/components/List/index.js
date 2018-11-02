import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Books from '../../index';

class List extends Component {
  keyExtractor = ({ id }) => id.toString();

  renderItem = ({ item }) => <Books item={item} />;

  render() {
    const { list } = this.props;
    return (
      <FlatList
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PROPSDEBOOKS.book)
};

export default List;
