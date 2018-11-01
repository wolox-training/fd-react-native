import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Home, ToDoList } from '../../../constants/routes';

const TabApp = createBottomTabNavigator({
  Home,
  ToDoList
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray'
  }
}
);

export default StackNavigator = createStackNavigator({
  ToDoBook: {
    screen: TabApp,
    navigationOptions: {
      title: 'ToDoBookApp'
    }
  }
});
