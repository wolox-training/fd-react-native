import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Book extends Component {
  navigateToDetails = () => {
    const book = BOOKS.find(book => book.id === this.props.id);
    this.props.navigation.navigate(ROUTES.BOOK, { book });
  }
  render() {
  const { image, title, author } = this.props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.icon} borderRadius={25} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  )
}
}

Book.defaultProps = {
  title: 'noname',
  author: 'Anonymous'
}

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Book;
