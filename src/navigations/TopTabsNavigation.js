import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import { Colors } from '../constans/colors';

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.secondary,
        },
        tabBarIndicatorStyle: Colors.primary,
        tabBarLabelStyle: {
          color: Colors.ligth
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />

      <Tab.Screen
        name='Contacts'
        component={Contacts}
      />

    </Tab.Navigator>
  )
}

export default TopTabsNavigation