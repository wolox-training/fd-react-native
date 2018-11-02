import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Picture from './components/Picture';
import { styles } from './styles';

class Books extends Component {
  render() {
    const { container } = this.props;
    return (
      <View style={styles.container}>
        <Picture imgUrl={container.image_url} size={40} />
        <View>
          <Text>{container.title}</Text>
          <Text>{container.author}</Text>
        </View>
      </View>
    );
  }
}

Books.propTypes = {
  container: PropTypes.array.isRequired
};

export default withNavigation(Books);
