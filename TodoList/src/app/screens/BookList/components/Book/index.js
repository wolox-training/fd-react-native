import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import routes from '../../../../../constants/routes';

class Book extends Component {
  Img = this.props.image ? (
    <Image source={{ uri: this.props.image }} style={styles.icon} />
  ) : (
    <View style={styles.circle} />
  );

  navigateToDetails = () => {
    const bookClicked = this.props.book;
    this.props.navigation.navigate(routes.BooksDetails, { bookClicked });
  };

  render() {
    const { title, author } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.navigateToDetails}>
        <View style={styles.container}>
          {this.Img}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Book;
