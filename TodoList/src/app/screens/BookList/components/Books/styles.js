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
    color: colors.grey
  },
  author: {
    color: colors.grey
  }
});

export default styles;
