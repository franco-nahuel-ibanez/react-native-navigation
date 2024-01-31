import { Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Settings = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Settings</Text>
    </View>
  )
}

export default Settings