import { Text, View, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import {useNavigation} from '@react-navigation/native'
import {useDrawerStatus} from '@react-navigation/drawer'
import Card from '../components/Card'

const Home = () => {

  const navigation = useNavigation()
  const drawerStatus = useDrawerStatus()


  return (
    <View style={globalStyles.screenContainer}>
      <Card />

    </View>
  )
}

export default Home
