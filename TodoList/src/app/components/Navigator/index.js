import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Books from '../../screens/Books';
import TodoList from '../../screens/ToDoList';

const TabApp = createBottomTabNavigator({
  Home: {
    screen: Books,
    navigationOptions: {
      title: 'Books'
    }
  },
  ToDoList: TodoList
},
{
  initialRouteName: 'Home'
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray'
  }
}
);

export default StackNavigator = createStackNavigator({
  Home: {
    screen: TabApp,
    navigationOptions: {
      title: 'ToDoBookApp'
    }
  }
});
