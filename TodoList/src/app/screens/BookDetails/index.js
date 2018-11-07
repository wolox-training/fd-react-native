import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

class BookDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('bookClicked').title
  });

  state = {
    book: this.props.navigation.getParam('bookClicked')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.book.title}</Text>
        <Text>{this.state.book.author}</Text>
        <Text>{this.state.book.genre}</Text>
        <Text>{this.state.book.publisher}</Text>
        <Text>{this.state.book.year}</Text>
      </View>
    );
  }
}

BookDetails.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  }).isRequired
};

export default BookDetails;
