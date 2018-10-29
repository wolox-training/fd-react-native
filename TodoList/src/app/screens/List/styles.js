import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "gainsboro"
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 20,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
})