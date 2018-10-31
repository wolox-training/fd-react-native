import { createStackNavigator, createTabNavigator } from 'react-navigation';
import Books from '../screens/Books';
import TodoList from '../screens/ToDoList';


const BooksNav = createStackNavigator(
  {
    Home: Books
  },
  {
    initialRouteName: 'Home'
  }
);

const TabApp = createTabNavigator(
  {
    Home: BooksNav,
    ToDoList: TodoList
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
