import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';

const ICON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  title: {
    color: colors.black
  },
  author: {
    color: colors.black
  },
  circle: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    resizeMode: 'contain',
    backgroundColor: colors.black
  }
});

export default styles;
