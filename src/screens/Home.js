import { Text, View, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import {useNavigation} from '@react-navigation/native'
import {useDrawerStatus} from '@react-navigation/drawer'

const Home = () => {

  const navigation = useNavigation()
  const drawerStatus = useDrawerStatus()


  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>

      <Text style={{...globalStyles.title, marginVertical: 15}}>
        {drawerStatus === 'open' ? 'Open' : 'Close'}  
      </Text>

      <Button
        title='Go to settings'
        onPress={()=> navigation.navigate('Settings')}
      />

      <Button
        title='Open Drawer'
        onPress={()=> navigation.openDrawer()}
      />


    </View>
  )
}

export default Home
