import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import BooksList from '../../screens/BookList';
import TodoList from '../../screens/ToDoList';
import routes from '../../../constants/routes';
import colors from '../../../constants/colors';

const TabApp = createBottomTabNavigator(
  {
    [routes.Books]: {
      screen: BooksList,
      navigationOptions: {
        title: 'Books'
      }
    },
    [routes.ToDoList]: {
      screen: TodoList,
      navigationOptions: {
        title: 'To Do List'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.grey
    }
  }
);

const StackNavigator = createStackNavigator({
  [routes.ToDoBook]: {
    screen: TabApp,
    navigationOptions: {
      title: 'To Do Book App'
    }
  }
});

export default StackNavigator;
