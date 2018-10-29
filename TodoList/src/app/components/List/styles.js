import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removed: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 20,
  },
  completed: {
    backgroundColor: 'white',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
