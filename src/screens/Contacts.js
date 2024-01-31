import { Button, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { globalStyles } from '../styles/global'

const Contacts = ({navigation}) => {

  const helperListener = () => {
  }
  
  useEffect(()=> {
    const unsubscribe = navigation.addListener("tabPress", e => {
      console.log(e)
    })
    
    return unsubscribe
  }, [navigation])

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Contacts</Text>

      <Button
        title='Go to Home'
        onPress={() => navigation.jumpTo('Home')}  
      />
    </View>
  )
}

export default Contacts