import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import styles from './styles';
import books from '../../../../../constants/books';
import routes from '../../../../../constants/routes';

function Book({
  image, title, author, id, navigation
}) {
  const navigateToDetails = () => {
    const bookClicked = books.find(book => book.id === id);
    navigation.navigate(routes.BooksDetails, { bookClicked });
  };
  const Img = image ? (
    <Image source={{ uri: image }} style={styles.icon} />
  ) : (
    <View style={styles.circle} />
  );
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <View style={styles.container}>
        {Img}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.number,
  navigation: PropTypes.func.isRequired
};

export default Book;

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  image_url: PropTypes.string
};
