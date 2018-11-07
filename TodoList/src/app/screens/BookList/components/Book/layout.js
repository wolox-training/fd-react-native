import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import styles from './styles';

function BookLayout({
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

BookLayout.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  navigate: PropTypes.func.isRequired
};

export default BookLayout
