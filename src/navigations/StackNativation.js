import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import CustomHeader from '../components/CustomHeader';
import BottomTabsNavigation from './BottomTabNavigation';

const HomeStack = createStackNavigator()

const StackNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        presentation: 'modal',
        gestureEnabled: true,
        //header: ({navigation, route, options, back}) => <CustomHeader title={route.name} />
      }}      
    >
      <HomeStack.Screen
        name='Root'
        component={BottomTabsNavigation}
      />

      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen
          name='Settings'
          component={Settings}
          options={{
            title: 'Settings',
            headerBackTitle: 'Home'
          }}
        />
      </HomeStack.Group>


    </HomeStack.Navigator>
  )
}

export default StackNavigation