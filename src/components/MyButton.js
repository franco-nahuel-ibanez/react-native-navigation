import { Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Colors } from "../constans/colors"

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}


export default MyButton

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: 'bold'
  }

})
