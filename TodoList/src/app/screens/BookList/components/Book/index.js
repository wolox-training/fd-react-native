import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import routes from '../../../../../constants/routes';
import BookLayout from './layout'

class Book extends Component {
  Img = this.props.book.image_url ? (
    <Image source={{ uri: this.props.book.image_url }} style={styles.icon} />
  ) : (
    <View style={styles.circle} />
  );

  navigateToDetails = () => {
    const bookClicked = this.props.book;
    this.props.navigation.navigate(routes.BooksDetails, { bookClicked });
  };

  render() {
    return (
      <BookLayout title={this.props.book.title} author={this.props.book.author} image={this.Img} navigate={this.navigateToDetails} />
    );
  }
}

export default withNavigation(Book);
