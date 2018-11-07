import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import books from '../../../constants/books';
import Book from './components/Book';

class BookList extends Component {
  renderItem = ({ item }) => (
    <Book
      book={item}
      key={item.id}
    />
  );

  render() {
    return <FlatList data={books} renderItem={this.renderItem} />;
  }
}

export default BookList;
