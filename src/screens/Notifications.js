import { Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Notifications = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
    </View>
  )
}

export default Notifications