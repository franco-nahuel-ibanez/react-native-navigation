import React, { useState, useContext } from 'react'
import {View, Button, StyleSheet} from 'react-native'
import MyInput from "./MyInput";
import { Colors } from '../constans/colors';
import { contactsStore } from '../reducers/contactReducer';

const AddContact = ({
  onAddContact
}) => {
  const { handleAddContact } = useContext(contactsStore)

  const [name, setName] = useState('')

  const handleAdd = () => {
    setName('')
    handleAddContact(name)
  }

  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
        <MyInput label="Add Contact" value={name} onChangeText={setName}/>
      </View>
      <Button 
        title='Add'
        color={Colors.primary}
        onPress={handleAdd}
      />
    </View>
  )
}



export default AddContact

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: '5%'
  }
})