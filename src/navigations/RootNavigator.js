import { useEffect } from 'react'
import { NavigationContainer } from  '@react-navigation/native'
import StackNavigation from './StackNativation'
import BottomTabsNavigation from './BottomTabNavigation'
import DrawerNavigation from './DrawerNavigation'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { restoreToken, signIn } from '../app/features/auth/auth'
import Splash from '../screens/Splash'

const RootNavigator = () => {

  const {userToken, isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    getValue()
  }, [])

  const getValue = async (value) => {
    try {
      const value = await AsyncStorage.getItem('@token')

      if(value !== null) {
        console.log("data restored", value)
        dispatch( restoreToken(value) )
      } else {
        console.log("No data")
        dispatch( restoreToken(null) )
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <Splash />
  return (
    <NavigationContainer>
      {
        userToken ? <DrawerNavigation /> : <AuthStack />
      }
    </NavigationContainer>
  )
}

export default RootNavigator



