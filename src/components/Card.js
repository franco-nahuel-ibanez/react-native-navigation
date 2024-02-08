import {View, Text, StyleSheet, Image} from 'react-native'
import { Colors } from '../constans/colors'
import { globalStyles } from '../styles/global'
import MyButton from './MyButton'
import { useSelector } from 'react-redux'

const Card = () => {
  const { userToken } = useSelector(state => state.auth)
  
  const doSomething = () => {
    console.log('1')
    console.log('2')
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.img} 
          source={{uri: 'https://img.freepik.com/fotos-premium/memoji-hombre-feliz-sobre-fondo-blanco-emoji_826801-6839.jpg?w=740'}}
        />
        <Text style={styles.name}>{userToken}</Text>
      </View>
      <MyButton title={"add"} onPress={doSomething} />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'snow',
    width: '85%',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
  img: {
    width: 100,
    height: 100
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  }
})