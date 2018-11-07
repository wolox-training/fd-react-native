import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import styles from './styles';

function Book({
  title, author, image, navigate
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={navigate}>
      <View style={styles.container}>
        {image}
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
  image: PropTypes.node,
  navigate: PropTypes.func.isRequired
};

export default Book;
