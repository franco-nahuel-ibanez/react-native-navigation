import React, {useMemo, useState} from "react";
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

const ContactList = ({
  contacts,
  onDeleteContact,
  onUpdateContact
}) => {
  
  return (
    <ScrollView>
      {
        contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
            onUpdate={onUpdateContact}
          />
        ))
      }
    </ScrollView>
  )
}

const Contact = ({contact, onUpdate, onDelete}) => {

  const [isEditing, setIsEditing] = useState(false)
  const memoPhoto = useMemo(() => getRandomPhoto(), [])

  let contactContainer 

  if(isEditing) {
    contactContainer = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={ text => {
            onUpdate({...contact, name: text})
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
        onPress={() => onDelete(contact.id)}
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
  }
})