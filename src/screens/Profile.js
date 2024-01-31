import { Text, View, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';
import {useDispatch} from 'react-redux'
import { signOut } from '../app/features/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {

  const dispatch = useDispatch()

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Profile</Text>

      <Button title='Sign Out' onPress={async () => {
        await AsyncStorage.removeItem('@token')
        dispatch( signOut() )
      }} />
    </View>
  )
}

export default Profile
