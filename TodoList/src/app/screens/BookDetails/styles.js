import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  text: {
    fontSize: 15
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default styles;
