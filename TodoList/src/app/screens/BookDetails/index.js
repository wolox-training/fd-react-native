import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

export const DETAILS = [
  { value: 'title', label: 'Title' },
  { value: 'author', label: 'Author' },
  { value: 'genre', label: 'Genre' },
  { value: 'publisher', label: 'Publisher' },
  { value: 'year', label: 'Year' }
];

class BookDetails extends Component {
  state = {
    book: this.props.navigation.getParam('bookClicked')
  };

  render() {
    return (
      <View style={styles.container}>
        {
          DETAILS.map(field => (
            <View key={field.value} style={styles.row}>
              <Text>{this.state.book[field.value]}</Text>
            </View>
          ))
        }
      </View>
    );
  }
}

export default BookDetails;
