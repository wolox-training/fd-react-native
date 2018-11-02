import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Picture = ({ imgUrl, size }) => (
  <View style={{
    borderRadius: size / 2, height: size, width: size, backgroundColor: 'grey'
  }}
  >
    {imgUrl !== null ? (
      <Image
        source={{
          uri: imgUrl
        }}
        style={{ height: size, width: size, borderRadius: size / 2 }}
        resizeMode="cover"
      />
    ) : (
      <Icon name="cross" type="entypo" color="#fff" />
    )}
  </View>
);

Picture.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Picture;
