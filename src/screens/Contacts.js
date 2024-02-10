import { Button, Text, View } from 'react-native'
import React, {useReducer} from 'react'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList'
import { ContactsProvider } from '../reducers/contactReducer'

const Contacts = () => {

  return (
    <ContactsProvider>
      <View style={globalStyles.simpleContainer}>
        <AddContact />
        <ContactList />
      </View>
    </ContactsProvider>
  )
}

export default Contacts