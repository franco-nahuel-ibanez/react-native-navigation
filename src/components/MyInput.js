import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constans/colors"

const MyInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    backgroundColor: Colors.ligth,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  }
})