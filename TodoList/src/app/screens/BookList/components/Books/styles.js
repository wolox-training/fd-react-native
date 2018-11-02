import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';

const ICON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  icon: {
    marginRight: 20,
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  title: {
    color: colors.grey,
    fontWeight: 'bold',
    marginBottom: 5
  },
  author: {
    color: colors.grey
  }
});

export default styles;
