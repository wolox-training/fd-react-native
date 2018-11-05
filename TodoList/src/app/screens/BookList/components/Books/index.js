import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import routes from '../../../../../constants/routes';
import booksList from '../../../../../constants/books';
import styles from './styles';

class Book extends Component {
  navigateToDetails = () => {
    const book = booksList.find(book => book.id === this.props.id);
    this.props.navigation.navigate(routes.Books, { book });
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
    );
  }
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Book;
