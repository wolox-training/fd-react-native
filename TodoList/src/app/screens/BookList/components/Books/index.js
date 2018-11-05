import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class Book extends Component {
  render() {
    const { image, title, author } = this.props;
    return (
      <View style={styles.container}>
        <View styles={styles.circle}>
          <Image source={{ uri: image || PLACEHOLDER_IMAGE}} style={styles.icon} borderRadius={25} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    );
  }
}

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150.png';

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Book;
