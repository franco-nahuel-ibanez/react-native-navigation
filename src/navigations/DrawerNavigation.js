import { createDrawerNavigator } from "@react-navigation/drawer"
import Notifications from "../screens/Notifications"
import StackNavigation from "./StackNativation"
import { Colors } from "../constans/colors"

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.secondary,
        drawerType: 'front'
      }}
    >
      <Drawer.Screen
        name="Stack"
        component={StackNavigation}
        options={{
          headerShown: false
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={Notifications}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation