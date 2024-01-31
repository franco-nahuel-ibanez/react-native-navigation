import { Text, ActivityIndicator, View } from 'react-native'
import { globalStyles } from '../styles/global'
import { Colors } from '../constans/colors'

const Splash = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Welcome</Text>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  )
}

export default Splash