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
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2
  },
  title: {
    color: colors.black
  },
  author: {
    color: colors.black
  },
  circle: {
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    width: ICON_SIZE,
    backgroundColor: colors.grey
  }
});

export default styles;
