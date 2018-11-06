import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function Book({ image, title, author }) {
  const Img = image ? (
    <Image source={{ uri: image }} style={styles.icon} />
  ) : (
    <View style={styles.circle} />
  );
  return (
    <View style={styles.container}>
      {Img}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Book;
