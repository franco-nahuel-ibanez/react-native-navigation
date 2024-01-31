import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'
import MyInput from '../../components/MyInput'
import MyButton from '../../components/MyButton'

const SignUp = ({navigation}) => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={"Email"}/>
      <MyInput label={"Password"} secureTextEntry={true}/>
      
      <MyButton title={"Sign Up"} />
      <MyButton title={"Login"} onPress={() => navigation.navigate("Login")} />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})