import React, {useMemo, useState, useContext} from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView
} from 'react-native';
import MyInput from "./MyInput";
import { getRandomPhoto } from "../utils/getRandomPhoto";
import { Colors } from "../constans/colors";
import {FontAwesome} from '@expo/vector-icons'
import { contactsStore } from "../reducers/contactReducer";

const ContactList = () => {
  const { contacts } = useContext(contactsStore)
  
  if(contacts.length === 0) {
    return <Text style={styles.title}>Aun no tienes contactos cargados</Text>
  }
  return (
    <ScrollView>
      {
        contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact}
          />
        ))
      }
    </ScrollView>
  )
}

const Contact = ({contact}) => {
  const { handleUpdateContact, handleDeleteContact } = useContext(contactsStore)
  const [isEditing, setIsEditing] = useState(false)
  const memoPhoto = useMemo(() => getRandomPhoto(), [])

  let contactContainer 

  if(isEditing) {
    contactContainer = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={ text => {
            handleUpdateContact({...contact, name: text})
          }}
        />
      </View>
    )
  } else {
    contactContainer = (
      <View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: memoPhoto
          }}
        />
        {contactContainer}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        )
          : (
            <Pressable
              onPress={() => setIsEditing(true)}
            >
              <FontAwesome
                name="edit"
                size={24}
                color={Colors.secondary}
                style={{marginRight: 15, marginTop: 5}}
              />
            </Pressable>
          )
      }
      <Pressable
        onPress={() => handleDeleteContact(contact.id)}
      >
        <FontAwesome
          name="trash"
          size={24}
          color={Colors.secondary}
          style={{marginRight: 15, marginTop: 5}}
        />
      </Pressable>
      </View>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
  contactContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.dark
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary
  }
})