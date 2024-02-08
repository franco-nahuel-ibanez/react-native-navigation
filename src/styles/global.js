import { StyleSheet } from "react-native";
import { Colors } from "../constans/colors";

export const globalStyles =  StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ligth
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.secondary
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: Colors.ligth
  }
})