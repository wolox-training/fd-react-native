import { StyleSheet } from 'react-native';
import colors from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: colors.black,
  }
});

export default styles;
