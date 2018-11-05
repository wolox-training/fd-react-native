import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import books from '../../../constants/books';
import Book from './components/Books';

class BookList extends Component {
  renderItem = ({ item }) => <Book image={item.image_url} title={item.title} author={item.author} key={item.id} />;

  render() {
    return <FlatList data={books} renderItem={this.renderItem} />;
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      title: PropTypes.string,
      genre: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  )
};

export default BookList;
