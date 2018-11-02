import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Books from '../../screens/Books';
import TodoList from '../../screens/ToDoList';
import routes from '../../../constants/routes';
import colors from '../../../constants/colors'

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
    activeTintColor: colors.red,
    inactiveTintColor: colors.grey
  }
});

const StackNavigator = createStackNavigator({
  [routes.ToDoBook]: {
    screen: TabApp,
    navigationOptions: {
      title: 'ToDoBookApp'
    }
  }
});

export default StackNavigator;
