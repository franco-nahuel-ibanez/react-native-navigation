import { Button, Pressable, Text, View } from 'react-native'
import React, {useReducer} from 'react'
import { globalStyles } from '../styles/global'
import { ContactsProvider } from '../reducers/contactReducer'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../app/features/contacts/contacts'


const ContactsRedux = () => {
  const contacts = useSelector(state => state.contacts)

  const dispatch = useDispatch()

  const handleOnPress = (id) => {
    dispatch( deleteContact(id) )
  }

  return (
    <ContactsProvider>
      <View style={globalStyles.simpleContainer}>
        <Text>Contacts Redux</Text>

        {
          contacts.map( c => (
            <Pressable
              onPress={ () => handleOnPress(c.id) }
            >
              <Text key={c.id}>{c.name}</Text>
            </Pressable>
          ) )
        }
      </View>
    </ContactsProvider>
  )
}

export default ContactsRedux