import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Books from '../../screens/Books';
import TodoList from '../../screens/ToDoList';
import routes from '../../../constants/routes'

const TabApp = createBottomTabNavigator({
  [routes.Books]: {
    screen: Books,
    navigationOptions: {
      title: 'Books'
    }
  },
  [routes.ToDoList]: TodoList
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray'
  }
});

export default StackNavigator = createStackNavigator({
  ToDoBook: {
    screen: TabApp,
    navigationOptions: {
      title: 'ToDoBookApp'
    }
  }
});
