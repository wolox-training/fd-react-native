import React, { Component } from 'react';

import { books } from '../../../constants/books';

import BookListLayout from './layout';

class BooksList extends Component {
  static navigationOptions = { title: 'Book List' };

  render() {
    return (
      <BookListLayout books={books} navigation={this.props.navigation} />
    );
  }
}

export default BooksList;
