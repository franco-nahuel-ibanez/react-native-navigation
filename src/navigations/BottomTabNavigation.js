import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../constans/colors'
import { Pressable } from 'react-native';
import TopTabsNavigation from './TopTabsNavigation';

const Tab = createBottomTabNavigator()

const BottomTabsNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.secondary
      }}
    >
      <Tab.Screen
        name="TopTab"
        component={TopTabsNavigation}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome name="align-center" style={{marginLeft: 20}} size={24} color={Colors.dark} />
            </Pressable>
          ),
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabsNavigation