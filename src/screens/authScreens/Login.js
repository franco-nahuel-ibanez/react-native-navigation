import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/global'
import MyInput from '../../components/MyInput'
import MyButton from '../../components/MyButton'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux'
import { signIn } from '../../app/features/auth/auth'

const Login = ({navigation}) => {

  const [token, setToken] = useState('');
  const dispatch = useDispatch()

  const save = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
      dispatch( signIn(value) )
      console.log("data saved")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput label={"Email"} value={token} onChangeText={setToken} />
      <MyInput label={"Password"} secureTextEntry={true}/>
      
      <MyButton title={"Sign In"} onPress={() => save(token)} />
      <MyButton title={"Sign Up"} onPress={() => navigation.navigate("SignUp")} />
    </View>
  )
}

export default Login
