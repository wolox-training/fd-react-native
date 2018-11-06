import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import books from '../../../constants/books';
import Book from './components/Book';

class BookList extends Component {
  renderItem = ({ item }) => (
    <Book
      book={item}
      image={item.image_url}
      title={item.title}
      author={item.author}
      key={item.id}
      navigation={this.props.navigation}
    />
  );

  render() {
    return <FlatList data={books} renderItem={this.renderItem} />;
  }
}

export default BookList;
